import { Routes } from "@angular/router";

export const PATIENTS_ROUTE: Routes = [
    { path: '', loadComponent: () => import('./patients-list/patients-list.component').then(a => a.PatientsListComponent) },
    { path: 'add', loadComponent: () => import('./add-patients/add-patients.component').then(a => a.AddPatientsComponent) },
    { path: 'appointments', loadComponent: () => import('./patient-appointments/patient-appointments.component').then(a => a.PatientAppointmentsComponent) },
    { path: 'recourds', loadComponent: () => import('./add-patients/add-patients.component').then(a => a.AddPatientsComponent) },
];