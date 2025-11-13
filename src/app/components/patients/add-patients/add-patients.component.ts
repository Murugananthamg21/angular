import { Component, signal } from '@angular/core';
import { fadeIn, slideToggle } from '../../../core/animations/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-patients.component.html',
  styleUrl: './add-patients.component.css',
  animations: [fadeIn, slideToggle]
})
export class AddPatientsComponent {
  isShow = signal(false);
  toggle() { this.isShow.update(a => !a) }
}
