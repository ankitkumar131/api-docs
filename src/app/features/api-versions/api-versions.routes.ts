import { Routes } from '@angular/router';

export const API_VERSIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-versions.component').then(m => m.ApiVersionsComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./version-details/version-details.component').then(m => m.VersionDetailsComponent)
  }
];
