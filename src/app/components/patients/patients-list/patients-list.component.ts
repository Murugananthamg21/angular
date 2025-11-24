import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { fadeIn, FILTER_SLIDE, FILTERTOPSLIDE } from '../../../core/animations/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LayoutToggleService } from '../../../core/services/layout-toggle.service';
import { MatCardModule } from '@angular/material/card';
import { TableCardService } from '../../../core/services/tableandcard/table-card.service';

@Component({
  selector: 'app-patients-list',
  standalone: true,
  imports: [
    RouterLink,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    DatePipe,
    ReactiveFormsModule,
    MatCardModule],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css',
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn, FILTERTOPSLIDE],
  providers: [LayoutToggleService]
})
export class PatientsListComponent {

  filterOpen = signal(false);
  patientForm!: FormGroup;
  private _liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _fb: FormBuilder,
    protected _tc: TableCardService<PeriodicElement>,
    protected _layoutService: LayoutToggleService,
  ) {
    this.patientForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      patientId: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: [null, [Validators.required, Validators.maxLength(250)]]
    })
  }

  ngOnInit() {
    this._tc.setData(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(event => this._tc.setPage(event));
    this.sort.sortChange.subscribe(event => this._tc.setSort(event));
  }

  openFilter() {
    this.filterOpen.update(a => !a);
  }

  displayedColumns: string[] = ['patientId', 'name', 'email', 'mobile', 'address', 'date'];

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onSubmit() {
    console.log(this.patientForm.valid);
  }

}

export interface PeriodicElement {
  name: string;
  email: string;
  mobile: number;
  patientId: number;
  date: Date;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { patientId: 1, email: 'demo@gmail.com', name: 'Hydrogen', mobile: 8220909226, address: 'H', date: new Date() },
  { patientId: 2, email: 'demo@gmail.com', name: 'Helium', mobile: 8220909226, address: 'He', date: new Date() },
  { patientId: 3, email: 'demo@gmail.com', name: 'Lithium', mobile: 8220909226, address: 'Li', date: new Date() },
  { patientId: 4, email: 'demo@gmail.com', name: 'Beryllium', mobile: 8220909226, address: 'Be', date: new Date() },
  { patientId: 5, email: 'demo@gmail.com', name: 'Boron', mobile: 8220909226, address: 'B', date: new Date() },
  { patientId: 6, email: 'demo@gmail.com', name: 'Carbon', mobile: 82209092267, address: 'C', date: new Date() },
  { patientId: 7, email: 'demo@gmail.com', name: 'Nitrogen', mobile: 82209092267, address: 'N', date: new Date() },
  { patientId: 8, email: 'demo@gmail.com', name: 'Oxygen', mobile: 82209092264, address: 'O', date: new Date() },
  { patientId: 9, email: 'demo@gmail.com', name: 'Fluorine', mobile: 82209092264, address: 'F', date: new Date() },
  { patientId: 10, email: 'demo@gmail.com', name: 'Neon', mobile: 82209092267, address: 'Ne', date: new Date() },
  { patientId: 11, email: 'demo@gmail.com', name: 'Sodium', mobile: 82209092267, address: 'Na', date: new Date() },
  { patientId: 12, email: 'demo@gmail.com', name: 'Magnesium', mobile: 8220909226, address: 'Mg', date: new Date() },
  { patientId: 13, email: 'demo@gmail.com', name: 'Aluminum', mobile: 82209092265, address: 'Al', date: new Date() },
  { patientId: 14, email: 'demo@gmail.com', name: 'Silicon', mobile: 82209092265, address: 'Si', date: new Date() },
  { patientId: 15, email: 'demo@gmail.com', name: 'Phosphorus', mobile: 82209092268, address: 'P', date: new Date() },
  { patientId: 16, email: 'demo@gmail.com', name: 'Sulfur', mobile: 8220909226, address: 'S', date: new Date() },
  { patientId: 17, email: 'demo@gmail.com', name: 'Chlorine', mobile: 8220909226, address: 'Cl', date: new Date() },
  { patientId: 18, email: 'demo@gmail.com', name: 'Argon', mobile: 8220909226, address: 'Ar', date: new Date() },
  { patientId: 19, email: 'demo@gmail.com', name: 'Potassium', mobile: 82209092263, address: 'K', date: new Date() },
  { patientId: 20, email: 'demo@gmail.com', name: 'Calcium', mobile: 8220909226, address: 'Ca', date: new Date() },
];
