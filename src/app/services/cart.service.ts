// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';

export interface CartItem {
  id_producto: number;
  nom_producto: string;
  precio_final: number;
  cantidad: number;
  stock: number; // ✅ Nuevo campo para control de stock
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];
  private storageKey = 'cart';

  constructor() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.cart = JSON.parse(stored);
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Omit<CartItem, 'cantidad'>, cantidad: number = 1): void {
    const existing = this.cart.find(p => p.id_producto === product.id_producto);
    if (existing) {
      const nuevaCantidad = existing.cantidad + cantidad;
      if (nuevaCantidad <= existing.stock) {
        existing.cantidad = nuevaCantidad;
      } else {
        alert(`No hay suficiente stock disponible para "${existing.nom_producto}"`);
      }
    } else {
      if (cantidad <= product.stock) {
        this.cart.push({ ...product, cantidad });
      } else {
        alert(`No hay suficiente stock disponible para "${product.nom_producto}"`);
      }
    }
    this.saveCart();
  }

  updateQuantity(id_producto: number, cantidad: number): void {
    const item = this.cart.find(p => p.id_producto === id_producto);
    if (item) {
      if (cantidad <= item.stock) {
        item.cantidad = cantidad;
        if (item.cantidad <= 0) {
          this.removeFromCart(id_producto);
        } else {
          this.saveCart();
        }
      } else {
        alert(`No hay suficiente stock disponible para "${item.nom_producto}"`);
      }
    }
  }

  removeFromCart(id_producto: number): void {
    this.cart = this.cart.filter(p => p.id_producto !== id_producto);
    this.saveCart();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.precio_final * item.cantidad, 0);
  }

  private saveCart(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
  }
}
