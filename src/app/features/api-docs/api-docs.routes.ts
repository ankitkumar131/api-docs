import { Routes } from '@angular/router';

export const API_DOCS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-docs.component').then(m => m.ApiDocsComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./api-documentation/api-documentation.component').then(m => m.ApiDocumentationComponent)
  }
];
