import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutToggleService {
  _toggleSignal = signal(true);
  private _isMobile = signal(false);
  readonly isMobile = this._isMobile;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => this.checkScreenSize());
    }
  }

  setStatus(status: boolean) {
    this._toggleSignal.set(status);
  }

  getStatusSignal() {
    return this._toggleSignal();
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this._isMobile.set(width <= 768);
    if (this._isMobile()) this._toggleSignal.set(false);
  }
}
