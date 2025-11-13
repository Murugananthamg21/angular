import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutToggleService {
  _toggleSignal = signal(true);

  setStatus(status: boolean) {
    this._toggleSignal.set(status);
  }

  getStatusSignal() {
    return this._toggleSignal();
  }

}
