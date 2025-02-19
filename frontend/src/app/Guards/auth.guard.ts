import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.getUserRole();

  if (!userRole) {
    router.navigate(['/login']);
    return false;
  }
  if (userRole === 'trainer' && state.url === '/home') {
    router.navigate(['/add']);
    return false;
  }
  const requiredRoles = route.data?.['roles'] as string[];
  if (requiredRoles && requiredRoles.includes(userRole)) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
