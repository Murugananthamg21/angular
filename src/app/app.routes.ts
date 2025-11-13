import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./components/auth/auth.component').then(co => co.AuthComponent),
    loadChildren: () =>
      import('./components/auth/auth.routes').then(a => a.AUTH_ROUTES),
  },

  {
    path: 'patients',
    loadComponent: () =>
      import('./layout/layout.component').then(
        c => c.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/patients/patients.routes').then(
            a => a.PATIENTS_ROUTE
          ),
      },
    ],
  },

  { path: '', redirectTo: 'signup', pathMatch: 'full' },
];
