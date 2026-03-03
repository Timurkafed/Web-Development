import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  imports: [FormsModule],
  template: `
    <div class="page">
      <button class="btn btn-ghost back-btn" (click)="goBack()">
        <span class="chevron"></span> Back to Albums
      </button>

      @if (isLoading) {
        <div class="spinner-wrap"><div class="spinner"></div></div>
      } @else if (error) {
        <div class="error-box">Failed to load album.</div>
      } @else if (album) {
        <div class="detail-card">
          <div class="detail-header">
            <span class="album-badge">Album #{{ album.id }}</span>
            <span class="user-badge">User {{ album.userId }}</span>
          </div>
          <h1 class="detail-title">{{ album.title }}</h1>

          <div class="edit-section">
            <label class="edit-label" for="titleInput">Edit Title</label>
            <input id="titleInput" type="text" class="edit-input"
              [(ngModel)]="editTitle" placeholder="Album title" />
            <div class="edit-actions">
              <button class="btn btn-primary" (click)="onSave()" [disabled]="isSaving">
                {{ isSaving ? 'Saving…' : 'Save Changes' }}
              </button>
              @if (saveSuccess) {
                <span class="success-msg">Saved successfully!</span>
              }
            </div>
          </div>

          <div class="nav-actions">
            <button class="btn btn-ghost" (click)="viewPhotos()">View Photos</button>
          </div>
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
    .detail-card {
      background: #fff; border-radius: 16px; padding: 36px;
      border: 1px solid #e2e8f0; box-shadow: 0 2px 16px rgba(0,0,0,0.05);
    }
    .detail-header { display: flex; gap: 10px; margin-bottom: 14px; }
    .album-badge, .user-badge {
      font-size: 0.75rem; font-weight: 600;
      padding: 3px 10px; border-radius: 999px;
    }
    .album-badge { background: #ede9fe; color: #4f46e5; }
    .user-badge  { background: #f0fdf4; color: #16a34a; }
    .detail-title { font-size: 1.4rem; font-weight: 700; color: #1e293b; margin-bottom: 28px; line-height: 1.4; text-transform: capitalize; }
    .edit-section { margin-bottom: 28px; }
    .edit-label { display: block; font-size: 0.8rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
    .edit-input {
      width: 100%; padding: 10px 14px; border: 1.5px solid #e2e8f0;
      border-radius: 8px; font-size: 0.95rem; color: #1e293b;
      font-family: inherit; transition: border-color 0.15s; background: #f8fafc;
    }
    .edit-input:focus { outline: none; border-color: #4f46e5; background: #fff; }
    .edit-actions { display: flex; align-items: center; gap: 12px; margin-top: 12px; }
    .success-msg { font-size: 0.85rem; color: #10b981; font-weight: 600; }
    .nav-actions { display: flex; gap: 10px; padding-top: 20px; border-top: 1px solid #f1f5f9; }
    .error-box { background: #fff; border: 1px solid #fecaca; border-radius: 10px; padding: 40px; text-align: center; color: #ef4444; }
  `],
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  album: Album | null = null;
  editTitle = '';
  isLoading = true;
  error = false;
  isSaving = false;
  saveSuccess = false;
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.albumService.getAlbum(id).subscribe({
      next: data => {
        this.album = data;
        this.editTitle = data.title;
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

  onSave(): void {
    if (!this.album) return;
    this.isSaving = true;
    this.saveSuccess = false;
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album = updated;
        this.isSaving = false;
        this.saveSuccess = true;
        this.cdr.detectChanges();
        setTimeout(() => { this.saveSuccess = false; this.cdr.detectChanges(); }, 2500);
      },
      error: () => { this.isSaving = false; this.cdr.detectChanges(); },
    });
  }

  viewPhotos(): void { this.router.navigate(['/albums', this.album!.id, 'photos']); }
  goBack(): void { this.router.navigate(['/albums']); }
}
