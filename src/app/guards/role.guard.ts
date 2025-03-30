import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return () => {
    const router = inject(Router);
    const token = localStorage.getItem('token');

    if (!token) {
      router.navigate(['/login']);
      return false;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userRole = decodedToken.rol;

      if (!allowedRoles.includes(userRole)) {
        // Redirigir según el rol real
        if (userRole === 'cliente') {
          router.navigate(['/cliente']);
        } else if (userRole === 'admin') {
          router.navigate(['/admin']);
        } else {
          router.navigate(['/login']);
        }
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error al decodificar token:', error);
      router.navigate(['/login']);
      return false;
    }
  };
};
