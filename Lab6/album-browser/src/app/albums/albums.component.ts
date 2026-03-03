import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  template: `
    <div class="page">
      <div class="list-header">
        <div>
          <h1 class="list-title">Albums</h1>
          <p class="list-sub">{{ albums.length }} albums from JSONPlaceholder</p>
        </div>
      </div>

      @if (isLoading) {
        <div class="spinner-wrap"><div class="spinner"></div></div>
      } @else if (error) {
        <div class="error-box">Failed to load albums. Please check your connection.</div>
      } @else if (albums.length === 0) {
        <div class="empty-box">All albums have been deleted.</div>
      } @else {
        <ul class="album-list">
          @for (album of albums; track album.id) {
            <li class="album-item">
              <span class="album-id">#{{ album.id }}</span>
              <span class="album-title" (click)="goToDetail(album.id)">{{ album.title }}</span>
              <div class="album-actions">
                <a [routerLink]="['/albums', album.id]" class="btn btn-ghost btn-sm">View</a>
                <button class="btn btn-danger btn-sm" (click)="onDelete(album.id)">Delete</button>
              </div>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: [`
    .list-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 24px; }
    .list-title { font-size: 1.7rem; font-weight: 700; color: #1e293b; }
    .list-sub { color: #64748b; font-size: 0.9rem; margin-top: 4px; }

    .album-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .album-item {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    .album-item:hover { border-color: #c7d2fe; box-shadow: 0 2px 12px rgba(79,70,229,0.08); }
    .album-id {
      min-width: 42px; font-size: 0.75rem; font-weight: 700;
      color: #94a3b8; background: #f1f5f9; padding: 3px 7px;
      border-radius: 5px; text-align: center;
    }
    .album-title {
      flex: 1; font-size: 0.92rem; color: #1e293b; cursor: pointer;
      font-weight: 500; line-height: 1.4; transition: color 0.15s;
    }
    .album-title:hover { color: #4f46e5; }
    .album-actions { display: flex; gap: 6px; flex-shrink: 0; }
    .btn-sm { padding: 5px 12px; font-size: 0.78rem; }
    .error-box, .empty-box {
      background: #fff; border: 1px solid #e2e8f0;
      border-radius: 10px; padding: 40px; text-align: center; color: #64748b;
    }
    @media (max-width: 540px) {
      .album-item { flex-wrap: wrap; }
      .album-title { flex: 1 0 100%; }
      .album-actions { width: 100%; justify-content: flex-end; }
    }
  `],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  isLoading = true;
  error = false;
  private sub!: Subscription;

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.sub = this.albumService.getAlbums().subscribe({
      next: data => {
        this.albums = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = true;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  goToDetail(id: number): void { this.router.navigate(['/albums', id]); }

  onDelete(id: number): void {
    this.albums = this.albums.filter(a => a.id !== id);
    this.cdr.detectChanges();
    this.albumService.deleteAlbum(id).subscribe();
  }
}
