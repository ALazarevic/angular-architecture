import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'component-a',
    loadComponent: () => import('./features/home/components/component-a/component-a.component').then((c) => c.ComponentAComponent),
    canActivate: [authGuard]
  },
  {
    path: 'component-b',
    loadComponent: () => import('./features/home/components/component-b/component-b.component').then((c) => c.ComponentBComponent)
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./features/sign-in/components/sign-in-form/sign-in-form.component').then((c) => c.SignInFormComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./core/components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent)
  }
];
