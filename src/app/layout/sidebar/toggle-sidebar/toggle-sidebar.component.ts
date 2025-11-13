import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { SidebarData } from '../../../shared/Model/sidebar-data';
import { MEDICAL_SIDEBAR } from '../../../shared/data/sidebarItems';
import { fadeIn, SideBarSlide } from '../../../core/animations/animations';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toggle-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './toggle-sidebar.component.html',
  styleUrl: './toggle-sidebar.component.css',
  animations: [fadeIn, SideBarSlide]
})
export class ToggleSidebarComponent implements OnInit {
  sidebarData: SidebarData[] = [];
  activeParentIndex: number | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sidebarData = MEDICAL_SIDEBAR;

    this.updateActiveParent(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateActiveParent(this.router.url);
      });
  }

  updateActiveParent(currentUrl: string) {
    this.activeParentIndex = this.sidebarData.findIndex(item =>
      item.options?.some(option => currentUrl.startsWith(option.url))
    );
  }


  openIndex: number | null = null;

  toggleOptions(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    this.openIndex = null;
  }
}
