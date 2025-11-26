import { Component, effect, signal } from '@angular/core';
import { fadeIn, slideToggle } from '../../../core/animations/animations';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-patients.component.html',
  styleUrl: './add-patients.component.css',
  animations: [fadeIn, slideToggle]
})
export class AddPatientsComponent {
  isShow = signal(false);
  toggle() { this.isShow.update(a => !a) }


  nameControl = new FormControl<string | null>('', Validators.required);

  constructor() {
    this.nameControl.valueChanges.subscribe(value => {
      console.log("🔥 valueChanges fired:", value);
    });
  }
}
