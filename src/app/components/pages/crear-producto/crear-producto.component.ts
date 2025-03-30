import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';  // Cambiado para importar los controles
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-crear-producto',
  imports: [FormsModule, NgIf, RouterLink,ReactiveFormsModule],
  templateUrl: './crear-producto.component.html',
})
export class CrearProductoComponent {
  // Definir el formulario reactivo usando FormGroup
  form: FormGroup;

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      nom_producto: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(null),
      stock: new FormControl(null),  // Usando FormControl para stock
      is_oferta: new FormControl(false),
      porcentaje_oferta: new FormControl(null),
    });
  }

  crearProducto() {
    if (this.form.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    const formValue = this.form.value;
  
    // Convertir campos numéricos explícitamente
    const body = {
      ...formValue,
      precio: Number(formValue.precio),
      porcentaje_oferta: Number(formValue.porcentaje_oferta),
      stock: Number(formValue.stock),
    };
  
    // Validación extra
    if (isNaN(body.stock) || body.stock < 0) {
      alert('El campo "Stock" debe ser un número válido y mayor o igual a 0.');
      return;
    }
  
    this.http.post(`${environment.apiUrl}/productos`, body).subscribe({
      next: () => {
        alert('Producto creado correctamente ✅');
        this.form.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear producto ❌');
      },
    });
  }
  
}
