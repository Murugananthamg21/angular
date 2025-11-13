import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarData } from '../../shared/Model/sidebar-data';
import { MEDICAL_SIDEBAR } from '../../shared/data/sidebarItems';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutToggleService } from '../../core/services/layout-toggle.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  sidebarData: SidebarData[] = [];

  constructor(private _layoutService: LayoutToggleService){}

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

  closeMobileBar(){
    this._layoutService.setStatus(false);
  }

}
