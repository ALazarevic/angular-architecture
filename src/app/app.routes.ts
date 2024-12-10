import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'component-a',
    loadComponent: () => import('./features/home/components/component-a/component-a.component').then((c) => c.ComponentAComponent)
  },
  {
    path: 'component-b',
    loadComponent: () => import('./features/home/components/component-b/component-b.component').then((c) => c.ComponentBComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./core/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent)
  }
];
