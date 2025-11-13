import { AfterViewChecked, Component, DoCheck, effect, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LayoutToggleService } from '../core/services/layout-toggle.service';
import { ToggleSidebarComponent } from './sidebar/toggle-sidebar/toggle-sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent, RouterOutlet, ToggleSidebarComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements DoCheck {
  toggeleClose!: boolean;

  constructor(private _layoutService: LayoutToggleService) { }

  ngOnInit(): void {
    // this.toggeleClose = this._layoutService.getStatusSignal();
  }

  ngDoCheck(): void {
    this.toggeleClose = this._layoutService.getStatusSignal();
  }
}
