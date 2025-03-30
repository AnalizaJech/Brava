import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('⛔ Error en login:', error);

        let mensaje = 'Error desconocido al iniciar sesión';

        if (error.status === 0) {
          mensaje = 'Servidor no disponible. Verifica tu conexión.';
        } else if (error.status === 401) {
          mensaje = 'Usuario o contraseña incorrectos.';
        } else if (error.status === 500) {
          mensaje = 'Error interno del servidor.';
        }

        return throwError(() => new Error(mensaje));
      })
    );
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  decodeToken(token: string): any {
    if (!token) return null;
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }
}
