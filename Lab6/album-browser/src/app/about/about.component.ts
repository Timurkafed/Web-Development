import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [],
    template: `
    <div class="page">
      <div class="about-card">
        <h1 class="about-title">About Album Browser</h1>
        <p class="about-desc">
          A multi-view Angular SPA demonstrating routing, HTTP services, and component architecture.
        </p>

        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Student</span>
            <span class="info-value">Timurkafed</span>
          </div>
          <div class="info-item">
            <span class="info-label">Course</span>
            <span class="info-value">Web Development — Lab 6</span>
          </div>
          <div class="info-item">
            <span class="info-label">API</span>
            <span class="info-value">JSONPlaceholder (jsonplaceholder.typicode.com)</span>
          </div>
          <div class="info-item">
            <span class="info-label">Framework</span>
            <span class="info-value">Angular 21 (Standalone Components)</span>
          </div>
        </div>

        <div class="features">
          <h2 class="features-title">Features</h2>
          <ul class="feature-list">
            <li>Angular Router with 6 routes and route parameters</li>
            <li>HttpClient service for REST API consumption</li>
            <li>Read, Update and Delete operations (CRUD)</li>
            <li>Loading states and empty state handling</li>
            <li>Reactive data with Observables</li>
            <li>Responsive photo grid layout</li>
          </ul>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .about-card {
      background: #fff;
      border-radius: 16px;
      padding: 40px;
      max-width: 680px;
      margin: 0 auto;
      box-shadow: 0 2px 16px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
    }
    .about-title { font-size: 1.8rem; font-weight: 700; color: #1e293b; margin-bottom: 10px; }
    .about-desc  { color: #64748b; line-height: 1.65; margin-bottom: 28px; }

    .info-grid { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
    .info-item {
      display: flex; gap: 12px; align-items: baseline;
      padding: 12px 16px; background: #f8fafc; border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    .info-label { font-size: 0.78rem; font-weight: 600; color: #94a3b8; min-width: 80px; text-transform: uppercase; letter-spacing: 0.04em; }
    .info-value { font-size: 0.95rem; color: #1e293b; font-weight: 500; }

    .features-title { font-size: 1.1rem; font-weight: 700; color: #1e293b; margin-bottom: 12px; }
    .feature-list { padding-left: 20px; display: flex; flex-direction: column; gap: 7px; }
    .feature-list li { color: #475569; font-size: 0.9rem; line-height: 1.5; }
  `],
})
export class AboutComponent { }
