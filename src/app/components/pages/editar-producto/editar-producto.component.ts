import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent implements OnInit {
  productId: number;
  form = {
    nom_producto: '',
    descripcion: '',
    precio: '' as any,
    stock: '' as any,
    is_oferta: false,
    porcentaje_oferta: '' as any,
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.cargarProducto();
  }

  cargarProducto() {
    this.http.get(`${environment.apiUrl}/productos/${this.productId}`).subscribe((product: any) => {
      this.form = {
        nom_producto: product.nom_producto,
        descripcion: product.descripcion,
        precio: product.precio,
        stock: product.stock,
        is_oferta: product.is_oferta,
        porcentaje_oferta: product.porcentaje_oferta ?? '',
      };
    });
  }

  editarProducto() {
    // Validaciones básicas
    if (!this.form.nom_producto || !this.form.descripcion || this.form.precio === '' || this.form.stock === '') {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const precio = Number(this.form.precio);
    const stock = Number(this.form.stock);
    const porcentaje = this.form.porcentaje_oferta !== '' ? Number(this.form.porcentaje_oferta) : undefined;

    if (isNaN(precio) || precio <= 0) {
      alert('El precio debe ser un número positivo.');
      return;
    }

    if (isNaN(stock) || stock < 0) {
      alert('El stock debe ser un número válido y mayor o igual a 0.');
      return;
    }

    const body = {
      nom_producto: this.form.nom_producto,
      descripcion: this.form.descripcion,
      precio,
      stock,
      is_oferta: this.form.is_oferta,
      porcentaje_oferta: porcentaje,
    };

    this.http.put(`${environment.apiUrl}/productos/${this.productId}`, body).subscribe({
      next: () => {
        alert('✅ Producto actualizado correctamente');
      },
      error: (err) => {
        console.error('Error al actualizar producto:', err);
        const mensaje = err.error?.message || 'Ocurrió un error al actualizar el producto';
        alert(`❌ ${mensaje}`);
      },
    });
  }
}
