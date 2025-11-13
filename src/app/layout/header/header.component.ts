import { Component, DoCheck, HostListener, OnInit, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutToggleService } from '../../core/services/layout-toggle.service';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../core/animations/animations';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, MatIconModule, MatButtonModule, MatToolbarModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [fadeIn]
})
export class HeaderComponent {
  openProfile = signal(false);
  constructor(private _layoutService: LayoutToggleService) { }

  closeToggle() {
    const current = this._layoutService.getStatusSignal();
    this._layoutService.setStatus(!current);
  }

  showProfile() {
    this.openProfile.update(a => !a);
  }

  get getProfileStatus() {
    return this.openProfile();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('.profile-card') || target.closest('.profile-toggle')) {
      return;
    }

    if (this.getProfileStatus) {
      this.openProfile.set(false);
    }
  }
}
