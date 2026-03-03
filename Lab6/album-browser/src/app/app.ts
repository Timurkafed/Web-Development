import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <nav class="navbar">
      <div class="nav-inner">
        <a class="nav-brand" routerLink="/home">
          <span class="brand-icon">🎵</span>
          <span class="brand-text">Album Browser</span>
        </a>
        <div class="nav-links">
          <a routerLink="/home"   routerLinkActive="active" class="nav-link">Home</a>
          <a routerLink="/about"  routerLinkActive="active" class="nav-link">About</a>
          <a routerLink="/albums" routerLinkActive="active" class="nav-link">Albums</a>
        </div>
      </div>
    </nav>
    <router-outlet />
  `,
    styles: [`
    .navbar {
      background: #fff;
      border-bottom: 1px solid #e2e8f0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 1px 8px rgba(0,0,0,0.06);
    }
    .nav-inner {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }
    .brand-icon { font-size: 1.4rem; }
    .brand-text { font-size: 1.1rem; font-weight: 700; color: #4f46e5; }
    .nav-links { display: flex; gap: 4px; }
    .nav-link {
      padding: 6px 14px;
      border-radius: 7px;
      font-size: 0.9rem;
      font-weight: 500;
      color: #64748b;
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
    }
    .nav-link:hover { background: #f1f5f9; color: #1e293b; }
    .nav-link.active { background: #ede9fe; color: #4f46e5; font-weight: 600; }

    @media (max-width: 480px) {
      .brand-text { font-size: 0.95rem; }
      .nav-link { padding: 6px 10px; font-size: 0.82rem; }
    }
  `],
})
export class App { }
