import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-product-card',
    imports: [],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
    @Input() product!: Product;
    @Output() deleteProduct = new EventEmitter<number>();

    activeImageIndex = signal(0);
    currentImageUrl = signal('');
    isGalleryOpen = signal(false);

    ngOnInit(): void {
        // Start with product.image (the main/cover image you set in the data)
        this.currentImageUrl.set(this.product.image);
        this.activeImageIndex.set(0);
    }

    setActiveImage(index: number): void {
        this.activeImageIndex.set(index);
        this.currentImageUrl.set(this.product.images[index]);
    }

    prevImage(): void {
        const prev = (this.activeImageIndex() - 1 + this.product.images.length) % this.product.images.length;
        this.activeImageIndex.set(prev);
        this.currentImageUrl.set(this.product.images[prev]);
    }

    nextImage(): void {
        const next = (this.activeImageIndex() + 1) % this.product.images.length;
        this.activeImageIndex.set(next);
        this.currentImageUrl.set(this.product.images[next]);
    }

    get currentImage(): string {
        return this.currentImageUrl();
    }

    get starsArray(): number[] {
        return Array.from({ length: 5 }, (_, i) => i);
    }

    isStarFilled(index: number): boolean {
        return index < Math.round(this.product.rating);
    }

    isStarHalf(index: number): boolean {
        const floor = Math.floor(this.product.rating);
        const decimal = this.product.rating - floor;
        return index === floor && decimal >= 0.3 && decimal < 0.7;
    }

    get whatsappLink(): string {
        const text = encodeURIComponent(`Посмотри этот товар на Kaspi: ${this.product.name} — ${this.product.link}`);
        return `https://wa.me/?text=${text}`;
    }

    get telegramLink(): string {
        const url = encodeURIComponent(this.product.link);
        const text = encodeURIComponent(this.product.name);
        return `https://t.me/share/url?url=${url}&text=${text}`;
    }

    get formattedPrice(): string {
        return this.product.price.toLocaleString('ru-KZ') + ' ₸';
    }

    onImageError(event: Event): void {
        const img = event.target as HTMLImageElement;
        img.src = `https://placehold.co/400x400/f5f5f5/999999?text=${encodeURIComponent(this.product.name.split(' ').slice(0, 2).join(' '))}`;
        img.onerror = null;
    }

    onDelete(): void {
        this.deleteProduct.emit(this.product.id);
    }
}
