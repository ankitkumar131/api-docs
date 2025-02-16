import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserRole } from './core/models/user.model';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'apis',
    loadChildren: () => import('./features/apis/apis.routes').then(m => m.APIS_ROUTES),
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN, UserRole.API_MANAGER] }
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.routes').then(m => m.USERS_ROUTES),
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ADMIN] }
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
