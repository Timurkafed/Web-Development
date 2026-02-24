import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/products.data';
import { ProductCardComponent } from '../product-card/product-card.component';

const STORAGE_KEY = 'kaspi_deleted_ids';

@Component({
    selector: 'app-product-list',
    imports: [ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    ngOnInit(): void {
        // Load deleted IDs from localStorage and filter them out
        const deletedIds = this.loadDeletedIds();
        this.products = PRODUCTS.filter(p => !deletedIds.includes(p.id));
    }

    onDeleteProduct(id: number): void {
        // Remove from displayed list
        this.products = this.products.filter(p => p.id !== id);
        // Save updated deleted IDs to localStorage
        this.saveDeletedId(id);
    }

    restoreAll(): void {
        localStorage.removeItem(STORAGE_KEY);
        this.products = [...PRODUCTS];
    }

    get hasDeletedProducts(): boolean {
        return this.products.length < PRODUCTS.length;
    }

    private loadDeletedIds(): number[] {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as number[]) : [];
    }

    private saveDeletedId(id: number): void {
        const current = this.loadDeletedIds();
        if (!current.includes(id)) {
            current.push(id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
        }
    }
}
