import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  imports: [],
  template: `
    <div class="page">
      <button class="btn btn-ghost back-btn" (click)="goBack()">
        <span class="chevron"></span> Back to Album
      </button>

      <div class="photos-header">
        <h1 class="photos-title">Album #{{ albumId }} — Photos</h1>
        @if (!isLoading && !error) {
          <span class="photos-count">{{ photos.length }} photos</span>
        }
      </div>

      @if (isLoading) {
        <div class="spinner-wrap"><div class="spinner"></div></div>
      } @else if (error) {
        <div class="error-box">Failed to load photos.</div>
      } @else if (photos.length === 0) {
        <div class="error-box">No photos found.</div>
      } @else {
        <div class="photo-grid">
          @for (photo of photos; track photo.id) {
            <div class="photo-card">
              <div class="photo-img-wrap">
                <img [src]="photo.thumbnailUrl" [alt]="photo.title" class="photo-thumb" loading="lazy" />
                <div class="photo-overlay">
                  <p class="photo-title-hover">{{ photo.title }}</p>
                </div>
              </div>
              <p class="photo-title">{{ photo.title }}</p>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .back-btn { margin-bottom: 20px; display: inline-flex; align-items: center; gap: 8px; }
    .chevron {
      display: inline-block; width: 8px; height: 8px;
      border-left: 2px solid #475569; border-bottom: 2px solid #475569;
      transform: rotate(45deg) translate(1px, -1px);
    }
    .photos-header { display: flex; align-items: baseline; gap: 12px; margin-bottom: 24px; }
    .photos-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; }
    .photos-count { font-size: 0.85rem; font-weight: 600; background: #ede9fe; color: #4f46e5; padding: 3px 10px; border-radius: 999px; }
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }
    .photo-card { display: flex; flex-direction: column; gap: 6px; }
    .photo-img-wrap {
      position: relative; border-radius: 10px; overflow: hidden;
      aspect-ratio: 1 / 1; background: #e2e8f0;
    }
    .photo-thumb { width: 100%; height: 100%; object-fit: cover; transition: transform 0.25s; }
    .photo-img-wrap:hover .photo-thumb { transform: scale(1.06); }
    .photo-overlay {
      position: absolute; inset: 0;
      background: rgba(15,23,42,0.72);
      display: flex; align-items: center; justify-content: center;
      padding: 8px; opacity: 0; transition: opacity 0.2s;
    }
    .photo-img-wrap:hover .photo-overlay { opacity: 1; }
    .photo-title-hover { color: #fff; font-size: 0.7rem; line-height: 1.4; text-align: center; }
    .photo-title {
      font-size: 0.72rem; color: #64748b; line-height: 1.35;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .error-box { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 40px; text-align: center; color: #64748b; }
    @media (max-width: 540px) { .photo-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 10px; } }
  `],
})
export class AlbumPhotosComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  albumId = 0;
  isLoading = true;
  error = false;
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: data => {
        this.photos = data;
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
  goBack(): void { this.router.navigate(['/albums', this.albumId]); }
}
