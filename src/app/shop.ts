import {
  Component,
  HostListener,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommerceStore } from './core/commerce.store';
import { Product, STORE } from './data/catalog';
import { LEGAL, LegalKey } from './data/legal';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './shop.html',
})
export class ShopComponent {
  readonly store = inject(CommerceStore);
  readonly config = STORE;
  readonly legal = LEGAL;
  readonly categories = [
    'Todas las piezas',
    'Chaquetas',
    'Bolsos',
    'Accesorios',
    'Viaje',
    'Mochilas',
  ];
  category = signal('Todas las piezas');
  query = signal('');
  onlyFavorites = signal(false);
  liveOnly = signal(false);
  sort = signal('Selección');
  sortOpen = signal(false);
  panel = signal<'cart' | 'product' | 'care' | 'legal' | 'size' | 'zoom' | ''>(
    '',
  );
  selected = signal<Product | null>(null);
  size = signal('');
  color = signal('');
  gallery = signal(0);
  lastAdded = signal('');
  notice = signal('');
  mobileMenu = signal(false);
  legalKey = signal<LegalKey>('privacy');
  specTab = signal('Detalles');
  zoom = signal(1);
  pan = signal({ x: 0, y: 0 });
  sortOptions = ['Selección', 'Nombre: A–Z', 'Nombre: Z–A'];
  views = computed(() => { const p = this.selected(); return p ? this.store.gallery(p,this.color()).map(i=>i.label) : []; });
  currentImage = computed(() => { const p=this.selected(); return p ? this.store.gallery(p,this.color())[this.gallery()] : null; });
  filtered = computed(() => {
    const p = this.store.products.filter(
      (p) =>
        (this.category() === 'Todas las piezas' ||
          p.category === this.category()) &&
        (!this.onlyFavorites() || this.store.favorites().includes(p.id)) &&
        (!this.liveOnly() || p.live) &&
        this.normalize(
          `${p.sku} ${p.name} ${p.brand} ${p.audience} ${p.category} ${p.colors.map((c) => c.name).join(' ')}`,
        ).includes(this.normalize(this.query())),
    );
    return this.sort() === 'Selección'
      ? p
      : [...p].sort((a, b) =>
          this.sort() === 'Nombre: A–Z'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name),
        );
  });
  private focusBefore: HTMLElement | null = null;
  private wasOpen = false;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private pointers = new Map<number, { x: number; y: number }>();
  private startDistance = 0;
  private startZoom = 1;
  private dragStart = { x: 0, y: 0 };
  private dragOrigin = { x: 0, y: 0 };
  constructor() {
    effect(() => {
      const opened = !!this.panel() || this.mobileMenu();
      if (opened) {
        if (!this.wasOpen)
          this.focusBefore = document.activeElement as HTMLElement;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          const modal = document.querySelector<HTMLElement>('.modal');
          if (modal) modal.scrollTop = 0;
          document.querySelector<HTMLButtonElement>(this.mobileMenu() ? '.fullscreen-menu .menu-close' : '.modal .modal-close')?.focus({preventScroll:true});
        });
      } else {
        document.body.style.overflow = '';
        if (this.wasOpen) this.focusBefore?.focus();
      }
      this.wasOpen = opened;
    });
  }
  ngOnInit() {
    const id = new URL(location.href).searchParams.get('pieza');
    const p = this.store.products.find((p) => p.id === id);
    if (p) this.open(p);
  }
  async share(p: Product) {
    const url = new URL(location.href);
    url.searchParams.set('pieza', p.id);
    url.hash = '';
    try {
      await navigator.clipboard.writeText(url.href);
      this.notify('Enlace de la pieza copiado.');
    } catch {
      this.notify('No se pudo copiar. Busca la pieza por código ' + p.sku);
    }
  }
  normalize(s: string) {
    return s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
  explore(c = 'Todas las piezas') {
    this.category.set(c);
    this.onlyFavorites.set(false);
    this.liveOnly.set(false);
    this.query.set('');
    this.mobileMenu.set(false);
    document
      .getElementById('collection')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  live() {
    this.explore();
    this.liveOnly.set(true);
  }
  favorites() {
    this.mobileMenu.set(false);
    this.onlyFavorites.set(!this.onlyFavorites());
    this.liveOnly.set(false);
    this.category.set('Todas las piezas');
    this.query.set('');
    document
      .getElementById('collection')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  open(p: Product) {
    this.mobileMenu.set(false);
    this.selected.set(p);
    this.size.set(p.sizes.length === 1 ? p.sizes[0] : '');
    this.color.set(p.colors[0].name);
    this.gallery.set(0);
    this.specTab.set('Detalles');
    this.panel.set('product');
  }
  selectColor(c: string) {
    this.color.set(c);
    this.gallery.set(0);
  }
  add(p: Product, size = p.sizes[0], color = p.colors[0].name) {
    if (!size) {
      this.notify('Selecciona una talla para continuar.');
      return;
    }
    if (!this.store.add(p.id, size, color)) {
      this.notify(
        'Máximo 5 unidades por variante. Consulta cantidades mayores por WhatsApp.',
      );
      return;
    }
    this.lastAdded.set(`${p.name} · ${color}`);
    this.panel.set('cart');
    this.notify(`${p.name} está en tu bolsa`);
  }
  close() {
    if (this.panel() === 'zoom' || this.panel() === 'size') {
      this.panel.set('product');
      return;
    }
    this.panel.set('');
    this.mobileMenu.set(false);
    this.lastAdded.set('');
  }
  legalPage(key: LegalKey) {
    this.legalKey.set(key);
    this.panel.set('legal');
    this.mobileMenu.set(false);
  }
  showZoom() {
    this.pointers.clear();
    this.zoom.set(1);
    this.pan.set({ x: 0, y: 0 });
    this.panel.set('zoom');
  }
  maxZoom() {
    const stage = document.querySelector<HTMLElement>('.zoom-stage');
    return stage ? Math.max(1, Math.min(3, (this.currentImage()?.width ?? 1400) / stage.clientWidth)) : 3;
  }
  setZoom(n: number) {
    this.zoom.set(Math.max(1, Math.min(this.maxZoom(), n)));
    const stage = document.querySelector<HTMLElement>('.zoom-stage');
    const limit = stage ? (stage.clientWidth * (this.zoom() - 1)) / 2 : 0;
    this.pan.update((p) => ({
      x: Math.max(-limit, Math.min(limit, p.x)),
      y: Math.max(-limit, Math.min(limit, p.y)),
    }));
  }
  wheel(e: WheelEvent) {
    e.preventDefault();
    this.setZoom(this.zoom() + (e.deltaY < 0 ? 0.25 : -0.25));
  }
  pointerDown(e: PointerEvent) {
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    this.dragStart = { x: e.clientX, y: e.clientY };
    this.dragOrigin = this.pan();
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      this.startDistance = Math.hypot(a.x - b.x, a.y - b.y);
      this.startZoom = this.zoom();
    }
  }
  pointerMove(e: PointerEvent) {
    if (!this.pointers.has(e.pointerId)) return;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      if (this.startDistance > 0)
        this.setZoom(
          (this.startZoom * Math.hypot(a.x - b.x, a.y - b.y)) /
            this.startDistance,
        );
    } else if (this.zoom() > 1) {
      const limit =
        ((e.currentTarget as HTMLElement).clientWidth * (this.zoom() - 1)) / 2;
      this.pan.set({
        x: Math.max(
          -limit,
          Math.min(limit, this.dragOrigin.x + e.clientX - this.dragStart.x),
        ),
        y: Math.max(
          -limit,
          Math.min(limit, this.dragOrigin.y + e.clientY - this.dragStart.y),
        ),
      });
    }
  }
  pointerUp(e: PointerEvent) {
    this.pointers.delete(e.pointerId);
    if (this.pointers.size === 1) {
      const p = [...this.pointers.values()][0];
      this.dragStart = p;
      this.dragOrigin = this.pan();
    }
  }
  nextView(delta: number) {
    this.gallery.update((v) => (v + delta + this.views().length) % this.views().length);
    this.setZoom(this.zoom());
    this.pan.set({ x: 0, y: 0 });
  }
  notify(s: string) {
    clearTimeout(this.timer);
    this.notice.set(s);
    this.timer = setTimeout(() => this.notice.set(''), 3500);
  }
  @HostListener('document:click', ['$event']) outside(e: MouseEvent) {
    if (!(e.target as HTMLElement).closest('.sort-picker'))
      this.sortOpen.set(false);
  }
  @HostListener('document:keydown', ['$event']) keyboard(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.close();
      this.sortOpen.set(false);
    }
    if (this.panel() === 'zoom' && e.key === 'ArrowRight') this.nextView(1);
    if (this.panel() === 'zoom' && e.key === 'ArrowLeft') this.nextView(-1);
    if ((!this.panel() && !this.mobileMenu()) || e.key !== 'Tab') return;
    const selector = this.mobileMenu() ? '.fullscreen-menu' : '.modal';
    const controls = Array.from(
      document.querySelectorAll<HTMLElement>(
        `${selector} button:not([disabled]), ${selector} a[href], ${selector} input`,
      ),
    );
    const first = controls[0],
      last = controls.at(-1);
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }
}
