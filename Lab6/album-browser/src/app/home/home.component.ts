import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    template: `
    <div class="page hero-page">
      <div class="hero-card">
        <div class="hero-badge">JSONPlaceholder API</div>
        <h1 class="hero-title">Album Browser</h1>
        <p class="hero-desc">
          Browse through 100 albums and thousands of photos fetched in real-time
          from the JSONPlaceholder REST API. View details, edit titles, and explore photo galleries.
        </p>
        <div class="hero-actions">
          <a routerLink="/albums" class="btn btn-primary">Browse Albums</a>
          <a routerLink="/about"  class="btn btn-ghost">About the app</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="stat-num">100</span><span class="stat-label">Albums</span></div>
          <div class="stat"><span class="stat-num">5&thinsp;000</span><span class="stat-label">Photos</span></div>
          <div class="stat"><span class="stat-num">10</span><span class="stat-label">Users</span></div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .hero-page { display: flex; justify-content: center; align-items: flex-start; padding-top: 60px; }
    .hero-card {
      background: #fff;
      border-radius: 20px;
      padding: 48px 40px;
      max-width: 560px;
      width: 100%;
      box-shadow: 0 4px 32px rgba(79,70,229,0.1);
      border: 1px solid #e0e7ff;
      text-align: center;
    }
    .hero-badge {
      display: inline-block;
      background: #ede9fe;
      color: #4f46e5;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 20px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .hero-title { font-size: 2.4rem; font-weight: 700; color: #1e293b; margin-bottom: 14px; }
    .hero-desc  { font-size: 1rem; color: #64748b; line-height: 1.65; margin-bottom: 28px; }
    .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 36px; }
    .hero-stats { display: flex; gap: 24px; justify-content: center; }
    .stat { display: flex; flex-direction: column; align-items: center; gap: 2px; }
    .stat-num   { font-size: 1.5rem; font-weight: 700; color: #4f46e5; }
    .stat-label { font-size: 0.8rem; color: #94a3b8; font-weight: 500; }
    @media (max-width: 480px) {
      .hero-card { padding: 32px 20px; }
      .hero-title { font-size: 1.8rem; }
    }
  `],
})
export class HomeComponent { }
