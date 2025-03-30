import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  try {
    // Verifica si el token parece válido (tiene 3 partes)
    if (token && token.split('.').length === 3) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  } catch (error) {
    console.error('Error en authInterceptor al procesar el token', error);
    // Si el token está corrupto, no lo usamos
  }

  return next(req);
};
