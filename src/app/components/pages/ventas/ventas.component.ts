import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CommonModule],
  templateUrl: './ventas.component.html',
})
export class VentasComponent implements OnInit {
  ventas: any[] = [];
  ventasFiltradas: any[] = [];

  filtroProducto = '';
  filtroCliente = '';
  filtroDesde: string = '';
  filtroHasta: string = '';
  mostrarExportar = false;

  paginaActual = 1;
  elementosPorPagina = 5;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas() {
    this.http.get<any[]>(`${environment.apiUrl}/ventas/ventas-globales`).subscribe((data) => {
      this.ventas = data
        .map(v => ({
          ...v,
          total: Number(v.monto_final),
          precio_unitario: Number(v.producto?.precio_final ?? 0),
          cantidad: Number(v.cantidad),
        }))
        .sort((a, b) => new Date(b.fecha_venta).getTime() - new Date(a.fecha_venta).getTime()); // 👈 Ordena por fecha descendente
  
      this.aplicarFiltros();
    });
  }
  

  aplicarFiltros() {
    this.paginaActual = 1; // Reiniciar paginación al filtrar

    this.ventasFiltradas = this.ventas.filter((v) => {
      const nombreProducto = v.producto?.nom_producto?.toLowerCase() || '';
      const nombreCliente = v.usuario?.username?.toLowerCase() || '';
      const fechaVenta = new Date(v.fecha_venta);

      const cumpleProducto = this.filtroProducto ? nombreProducto.includes(this.filtroProducto.toLowerCase()) : true;
      const cumpleCliente = this.filtroCliente ? nombreCliente.includes(this.filtroCliente.toLowerCase()) : true;
      const cumpleDesde = this.filtroDesde ? fechaVenta >= new Date(this.filtroDesde) : true;
      const cumpleHasta = this.filtroHasta ? fechaVenta <= new Date(this.filtroHasta + 'T23:59:59') : true;

      return cumpleProducto && cumpleCliente && cumpleDesde && cumpleHasta;
    });
  }

  limpiarFiltros() {
    this.filtroProducto = '';
    this.filtroCliente = '';
    this.filtroDesde = '';
    this.filtroHasta = '';
    this.aplicarFiltros();
  }

  get ventasPaginadas() {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    return this.ventasFiltradas.slice(inicio, fin);
  }

  get totalPaginas(): number {
    return Math.ceil(this.ventasFiltradas.length / this.elementosPorPagina);
  }

  exportar(formato: 'excel' | 'csv' | 'pdf') {
    const data = this.ventasFiltradas.map(v => ({
      Producto: v.producto?.nom_producto,
      Cliente: v.usuario?.username,
      'Precio Unitario': v.precio_unitario,
      Cantidad: v.cantidad,
      Total: v.total,
      Fecha: new Date(v.fecha_venta).toLocaleString(),
    }));

    if (formato === 'excel') {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Ventas');
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      FileSaver.saveAs(new Blob([excelBuffer]), 'ventas.xlsx');
    }

    if (formato === 'csv') {
      const ws = XLSX.utils.json_to_sheet(data);
      const csv = XLSX.utils.sheet_to_csv(ws);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      FileSaver.saveAs(blob, 'ventas.csv');
    }

    if (formato === 'pdf') {
      const doc = new jsPDF();
      autoTable(doc, {
        head: [['Producto', 'Cliente', 'Precio Unitario', 'Cantidad', 'Total', 'Fecha']],
        body: data.map(d => Object.values(d)),
      });
      doc.save('ventas.pdf');
    }

    this.mostrarExportar = false;
  }
}
