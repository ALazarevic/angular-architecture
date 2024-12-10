import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  if (inject(AuthService).isUserAuthenticated()) {
    return true;
  } else {
    inject(Router).navigate(['sign-in']);
    return false;
  }
};
