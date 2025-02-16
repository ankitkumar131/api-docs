import { Routes } from '@angular/router';
import { UserRole } from '../../core/models/user.model';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/user-list/user-list.component').then(m => m.UserListComponent),
    title: 'User Management',
    data: { roles: [UserRole.ADMIN] }
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/user-create/user-create.component').then(m => m.UserCreateComponent),
    title: 'Create New User',
    data: { roles: [UserRole.ADMIN] }
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/user-details/user-details.component').then(m => m.UserDetailsComponent),
    title: 'User Details',
    data: { roles: [UserRole.ADMIN] }
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./pages/user-edit/user-edit.component').then(m => m.UserEditComponent),
    title: 'Edit User',
    data: { roles: [UserRole.ADMIN] }
  }
];
