# 🛍️ Kaspi Online Store — Lab4 Task2

Angular 21 online store displaying real products from [kaspi.kz](https://kaspi.kz).

## Features

- 12 real products from Kaspi.kz with images, prices, ratings
- Interactive image gallery with thumbnail navigation and prev/next arrows
- Star rating display (filled/half/empty stars)
- Share buttons for **WhatsApp** and **Telegram**
- Responsive CSS Grid layout (3 → 2 → 1 columns)
- Dark theme with smooth hover animations

## Project Structure

```
src/app/
├── models/
│   └── product.model.ts       # Product TypeScript interface
├── data/
│   └── products.data.ts       # 12 real Kaspi products
├── product-list/              # ProductListComponent
│   ├── product-list.component.ts
│   ├── product-list.component.html
│   └── product-list.component.css
├── product-card/              # ProductCardComponent
│   ├── product-card.component.ts
│   ├── product-card.component.html
│   └── product-card.component.css
├── app.ts                     # Root component
├── app.routes.ts              # Routing config
└── app.config.ts              # App config
```

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
ng serve

# 3. Open in browser
http://localhost:4200
```

## Angular Concepts Used

| Concept | Where |
|---|---|
| `@Input()` | ProductCard receives Product from ProductList |
| `[property]` binding | `[src]`, `[href]`, `[class.active]` |
| `(event)` binding | `(click)` on nav buttons & thumbnails |
| `{{ interpolation }}` | Name, price, rating display |
| `@for` control flow | Product grid & star rating loop |
| `@if / @else` | Filled / half / empty star logic |
| `signal()` | Active image index reactive state |
| TypeScript interfaces | `Product` model with strong typing |
| CSS Grid | Responsive product grid |
| Scoped component styles | Each component has its own `.css` |
