import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarData } from '../../../shared/Model/sidebar-data';
import { MEDICAL_SIDEBAR } from '../../../shared/data/sidebarItems';
import { fadeIn } from '../../../core/animations/animations';

@Component({
  selector: 'app-toggle-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './toggle-sidebar.component.html',
  styleUrl: './toggle-sidebar.component.css',
  animations:[fadeIn]
})
export class ToggleSidebarComponent {
  sidebarData: SidebarData[] = [];

  ngOnInit(): void {
    this.sidebarData = MEDICAL_SIDEBAR;
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
