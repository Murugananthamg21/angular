import { Component, DoCheck, OnInit, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutToggleService } from '../../core/services/layout-toggle.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  constructor(private _layoutService: LayoutToggleService) { }

  closeToggle() {
    const current = this._layoutService.getStatusSignal();
    this._layoutService.setStatus(!current);
  }
}
