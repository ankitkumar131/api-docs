import { Routes } from '@angular/router';
import { UserRole } from '../../core/models/user.model';

export const APIS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/api-list/api-list.component').then(m => m.ApiListComponent),
    title: 'API Management'
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/api-create/api-create.component').then(m => m.ApiCreateComponent),
    title: 'Create New API',
    data: { roles: [UserRole.ADMIN, UserRole.API_MANAGER] }
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/api-details/api-details.component').then(m => m.ApiDetailsComponent),
    title: 'API Details'
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./pages/api-edit/api-edit.component').then(m => m.ApiEditComponent),
    title: 'Edit API',
    data: { roles: [UserRole.ADMIN, UserRole.API_MANAGER] }
  },
  {
    path: ':id/docs',
    loadComponent: () => import('./pages/api-docs/api-docs.component').then(m => m.ApiDocsComponent),
    title: 'API Documentation'
  }
];
