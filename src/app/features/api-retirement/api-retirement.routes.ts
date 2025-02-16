import { Routes } from '@angular/router';

export const API_RETIREMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-retirement.component').then(m => m.ApiRetirementComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./retirement-plan/retirement-plan.component').then(m => m.RetirementPlanComponent)
  }
];
