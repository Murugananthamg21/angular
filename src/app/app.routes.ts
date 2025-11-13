import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "patients", loadChildren: () => import('./components/patients/patients.routes').then(a => a.PATIENTS_ROUTE) },
    { path: '', redirectTo: 'patients', pathMatch: 'full' }
];
