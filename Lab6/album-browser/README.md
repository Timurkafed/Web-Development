# 🎵 Album Browser — Lab 6

Angular SPA that fetches albums and photos from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) REST API.

## How to Run

```bash
cd "c:\Users\user\Desktop\Web-Development\Lab6\album-browser"
npm install
ng serve
```

Open → **http://localhost:4200**

## Routes

| URL | View |
|---|---|
| `/home` | Welcome page |
| `/about` | About page |
| `/albums` | List of 100 albums |
| `/albums/:id` | Album details + edit title |
| `/albums/:id/photos` | Photo grid for album |

## Features

- **Routing**: 6 routes with `routerLink`, `routerLinkActive`, route params
- **HTTP**: `AlbumService` wraps `HttpClient`; components never call HTTP directly
- **Read**: Browse all 100 albums; view single album; view album's 50 photos
- **Update**: Edit album title inline → Save → success confirmation
- **Delete**: Remove album from list (optimistic update)
- **Loading states**: CSS spinner on every data-fetch
- **Error states**: Friendly message on network failure
- **Responsive**: Photo grid adapts from 2 to 6 columns

## Project Structure

```
src/app/
├── models/
│   ├── album.model.ts         # Album interface
│   └── photo.model.ts         # Photo interface
├── services/
│   └── album.service.ts       # AlbumService (HttpClient)
├── home/                      # HomeComponent
├── about/                     # AboutComponent
├── albums/                    # AlbumsComponent (list)
├── album-detail/              # AlbumDetailComponent (edit)
├── album-photos/              # AlbumPhotosComponent (grid)
└── app.ts                     # AppComponent (navbar + router-outlet)
```

## Angular Concepts Used

| Concept | Where |
|---|---|
| `RouterLink` / `RouterLinkActive` | Navbar links |
| `ActivatedRoute.snapshot.paramMap` | AlbumDetail, AlbumPhotos |
| `Router.navigate()` | Programmatic navigation |
| `HttpClient` | AlbumService (via `provideHttpClient()`) |
| `Observable` + `subscribe()` | All async data fetching |
| `ngOnInit` / `ngOnDestroy` | Lifecycle hooks in all data components |
| `[(ngModel)]` | Edit title input in AlbumDetail |
| `@if / @else / @for` | Template control flow |
