import { Routes } from '@angular/router';

export const API_DESIGN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-design.component').then(m => m.ApiDesignComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./api-editor/api-editor.component').then(m => m.ApiEditorComponent)
  }
];
