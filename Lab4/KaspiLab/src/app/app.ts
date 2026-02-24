import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <div class="logo">
          <span class="logo-icon">🛍️</span>
          <span class="logo-text">Kaspi <span class="logo-accent">Store</span></span>
        </div>
        <p class="header-sub">Лучшие товары с Kaspi.kz</p>
      </div>
    </header>
    <main>
      <router-outlet />
    </main>
    <footer class="site-footer">
      <p>© 2025 Kaspi Store — Все цены указаны в тенге (₸)</p>
    </footer>
  `,
  styles: [`
    .site-header {
      background: #ffffff;
      border-bottom: 2px solid #f0d0d0;
      padding: 20px 24px;
      box-shadow: 0 2px 16px rgba(180, 40, 40, 0.08);
    }
    .header-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .logo-icon {
      font-size: 2rem;
    }
    .logo-text {
      font-size: 1.6rem;
      font-weight: 700;
      color: #1a1a1a;
    }
    .logo-accent {
      color: #c41e2a;
    }
    .header-sub {
      font-size: 0.88rem;
      color: #16a34a;
      font-weight: 500;
      margin: 0;
    }
    main {
      min-height: calc(100vh - 140px);
    }
    .site-footer {
      text-align: center;
      padding: 20px;
      font-size: 0.82rem;
      color: #aaa;
      border-top: 1px solid #f0d8d8;
      background: #fff;
    }
    @media (max-width: 640px) {
      .header-inner { flex-direction: column; gap: 6px; text-align: center; }
      .logo-text { font-size: 1.3rem; }
    }
  `],
})
export class App { }
