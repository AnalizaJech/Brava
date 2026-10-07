import { Injectable, computed, signal } from '@angular/core';
import { PRODUCTS, STORE, CartLine, Product } from '../data/catalog';
import { readStored, writeStored } from './storage';
@Injectable({ providedIn: 'root' })
export class CommerceStore {
  readonly products = PRODUCTS;
  readonly cart = signal<CartLine[]>(this.restoreCart());
  readonly favorites = signal<string[]>(this.restoreFavorites());
  readonly count = computed(() =>
    this.cart().reduce((sum, line) => sum + line.quantity, 0),
  );
  readonly items = computed(() =>
    this.cart().map((line) => ({
      ...line,
      product: PRODUCTS.find((p) => p.id === line.productId)!,
    })),
  );
  readonly total = computed(() =>
    this.items().reduce(
      (sum, line) => sum + line.product.price * line.quantity,
      0,
    ),
  );
  readonly destination = signal('');
  readonly carrier = signal('Por definir');
  readonly orderReference = 'BRV-' + new Date().toISOString().slice(0,10).replaceAll('-','') + '-' + crypto.getRandomValues(new Uint32Array(1))[0].toString(36).slice(0,5).toUpperCase();
  readonly whatsapp = computed(() => {
    const lines = this.items().map((line, i) => {
      const variant = line.product.variants.find(v => v.color === line.color && v.size === line.size);
      return `${i+1}. ${line.product.sku} | ${line.product.brand}
   Modelo: ${line.product.name}
   Color: ${line.color} · Talla / formato: ${line.size}
   Cantidad: ${line.quantity}
   Ref. proveedor: ${variant?.supplierSku ?? 'Por confirmar'}
   Opción de fábrica: ${variant?.supplierTitle ?? 'Por confirmar'}
   Variante: ${variant?.supplierVariant ?? 'Por confirmar'}`;
    });
    const destination = this.destination().replace(/[\r\n]/g, ' ').trim().slice(0,100) || 'Por indicar';
    const text = `BRAVA | SOLICITUD DE COMPRA
Referencia: ${this.orderReference}

ARTÍCULOS (${this.count()} unidades)
${lines.join('\n\n')}

ENTREGA EN PERÚ
Ciudad / distrito: ${destination}
Transporte: ${this.carrier()}

Solicito cotización final en soles o dólares, disponibilidad y plazo de importación / entrega para esta selección. Incluir envío, condiciones de cambios y medios de pago antes de confirmar.

Esta solicitud no reserva productos ni acredita un pago.`;
    return `https://wa.me/${STORE.phone}?text=${encodeURIComponent(text)}`;
  });
  gallery(p: Product, color = p.colors[0].name) {
    return (p.colors.find(c => c.name === color) ?? p.colors[0]).gallery;
  }
  imageUrl(p: Product, color = p.colors[0].name, view = 0) {
    const gallery = this.gallery(p,color);
    return gallery[Math.max(0,Math.min(gallery.length-1,Math.trunc(view)))].path;
  }
  image(p: Product, color = p.colors[0].name, view = 0) {
    return {
      'background-image': `url("${this.imageUrl(p, color, view)}")`,
      'background-position': 'center',
      'background-size': 'contain',
    };
  }
  money(n: number) {
    if (!n) return "Por cotizar";
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n);
  }
  private key(id: string, size: string, color: string, line: CartLine) {
    return line.productId === id && line.size === size && line.color === color;
  }
  add(id: string, size: string, color: string) {
    const p = PRODUCTS.find((p) => p.id === id);
    if (
      !p ||
      !p.sizes.includes(size) ||
      !p.colors.some((c) => c.name === color) ||
      !p.variants.some(v => v.color === color && v.size === size)
    )
      return false;
    const item = this.cart().find((l) => this.key(id, size, color, l));
    if (item && item.quantity >= STORE.maxQuantity) return false;
    this.cart.update((lines) =>
      item
        ? lines.map((l) =>
            l === item ? { ...l, quantity: l.quantity + 1 } : l,
          )
        : [...lines, { productId: id, size, color, quantity: 1 }],
    );
    this.persist();
    return true;
  }
  change(id: string, size: string, color: string, delta: number) {
    if (!Number.isInteger(delta)) return;
    this.cart.update((lines) =>
      lines
        .map((l) =>
          this.key(id, size, color, l)
            ? { ...l, quantity: Math.min(5, Math.max(0, l.quantity + delta)) }
            : l,
        )
        .filter((l) => l.quantity > 0),
    );
    this.persist();
  }
  remove(id: string, size: string, color: string) {
    this.cart.update((lines) =>
      lines.filter((l) => !this.key(id, size, color, l)),
    );
    this.persist();
  }
  favorite(id: string) {
    if (!PRODUCTS.some((p) => p.id === id)) return;
    this.favorites.update((ids) =>
      ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id],
    );
    writeStored('brava:favorites:v2', this.favorites());
  }
  clearLocal() {
    this.cart.set([]);
    this.favorites.set([]);
    this.persist();
    writeStored('brava:favorites:v2', []);
    try {
      localStorage.removeItem('bruna:cart:v1');
      localStorage.removeItem('bruna:favorites:v1');
    } catch {}
  }
  private persist() {
    writeStored('brava:cart:v2', this.cart());
  }
  private restoreFavorites() {
    const data =
      readStored('brava:favorites:v2') ?? readStored('bruna:favorites:v1');
    return Array.isArray(data)
      ? [
          ...new Set(
            data
              .slice(0, 30)
              .filter(
                (id): id is string =>
                  typeof id === 'string' && PRODUCTS.some((p) => p.id === id),
              ),
          ),
        ]
      : [];
  }
  private restoreCart(): CartLine[] {
    const data = readStored('brava:cart:v2') ?? readStored('bruna:cart:v1');
    if (!Array.isArray(data)) return [];
    const result: CartLine[] = [];
    for (const raw of data.slice(0, 100)) {
      if (!raw || typeof raw !== 'object') continue;
      const p = PRODUCTS.find((p) => p.id === raw.productId);
      if (
        !p ||
        typeof raw.size !== 'string' ||
        !p.sizes.includes(raw.size) ||
        !Number.isInteger(raw.quantity) ||
        raw.quantity < 1 ||
        raw.quantity > 5
      )
        continue;
      const color = raw.color ?? p.colors[0].name;
      if (
        typeof color !== 'string' ||
        !p.colors.some((c) => c.name === color) ||
        !p.variants.some(v => v.color === color && v.size === raw.size) ||
        result.some((l) => this.key(p.id, raw.size, color, l))
      )
        continue;
      result.push({
        productId: p.id,
        size: raw.size,
        color,
        quantity: raw.quantity,
      });
    }
    return result;
  }
}
