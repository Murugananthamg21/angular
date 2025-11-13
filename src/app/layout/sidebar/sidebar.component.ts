import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarData } from '../../shared/Model/sidebar-data';
import { MEDICAL_SIDEBAR } from '../../shared/data/sidebarItems';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { LayoutToggleService } from '../../core/services/layout-toggle.service';
import { SideBarSlide } from '../../core/animations/animations';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [SideBarSlide]
})
export class SidebarComponent implements OnInit {
  sidebarData: SidebarData[] = [];
  activeParentIndex: number | null = null;

  constructor(private _layoutService: LayoutToggleService, private router: Router) { }

  ngOnInit(): void {
    this.sidebarData = MEDICAL_SIDEBAR;

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;
        this.activeParentIndex = this.sidebarData.findIndex(item =>
          item.options?.some(option => currentUrl.startsWith(option.url))
        );
      });
  }

  openIndex: number | null = null;

  toggleOptions(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }

  closeMobileBar() {
    this._layoutService.setStatus(false);
  }

}
