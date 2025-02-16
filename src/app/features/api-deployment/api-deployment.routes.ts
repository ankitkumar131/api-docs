import { Routes } from '@angular/router';

export const API_DEPLOYMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-deployment.component').then(m => m.ApiDeploymentComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./deployment-config/deployment-config.component').then(m => m.DeploymentConfigComponent)
  }
];
