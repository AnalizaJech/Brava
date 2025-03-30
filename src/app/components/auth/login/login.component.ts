import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule,NgIf],
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  mensajeError: string = ''; // <-- para mostrar mensaje visual

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.mensajeError = ''; // limpiar mensaje antes de enviar

    this.authService.login(this.credentials).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access_token);
        const rol = JSON.parse(atob(res.access_token.split('.')[1])).rol;
        this.router.navigate([rol === 'admin' ? '/admin/productos' : '/cliente/tienda']);
      },
      error: (err) => {
        this.mensajeError = err.message || 'Error desconocido.';
      }
    });
  }
}
