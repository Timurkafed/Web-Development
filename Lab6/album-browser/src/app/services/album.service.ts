import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

// ── Fallback data (used when the API is unreachable) ─────────────────
const MOCK_ALBUMS: Album[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    userId: Math.floor(i / 2) + 1,
    title: [
        'sunt aut facere repellat provident occaecati excepturi',
        'qui est esse',
        'ea molestias quasi exercitationem repellat qui ipsa',
        'eum et est occaecati',
        'nesciunt quas odio',
        'dolorem eum magni eos aperiam quia',
        'magnam facilis autem',
        'dolorem dolore est ipsam',
        'nesciunt iure omnis dolorem tempora et accusantium',
        'optio molestias id quia eum',
        'et ea vero quia laudantium autem',
        'in quibusdam tempore odit est dolorem',
        'ea et aut quia',
        'eum labore error sit officiis itaque tempore',
        'reprehenderit sunt fugiat ut esse',
        'sunt totam blanditiis harum',
        'quas ut distinctio beatae aut quis',
        'omnis facilis saepe similique',
        'aut impedit adipisci quia sunt',
        'rerum dignissimos facere provident',
    ][i],
}));

const MOCK_PHOTOS: Photo[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    albumId: 1,
    title: `photo title ${i + 1}`,
    url: `https://picsum.photos/seed/photo${i + 1}/600/600`,
    thumbnailUrl: `https://picsum.photos/seed/photo${i + 1}/150/150`,
}));


// ─────────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class AlbumService {
    private readonly base = 'https://jsonplaceholder.typicode.com';
    private readonly TIMEOUT_MS = 8_000;

    constructor(private http: HttpClient) { }

    /** Fetch all albums — falls back to local mock on error */
    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.base}/albums`).pipe(
            timeout(this.TIMEOUT_MS),
            catchError(() => of(MOCK_ALBUMS)),
        );
    }

    /** Fetch single album */
    getAlbum(id: number): Observable<Album> {
        const fallback = MOCK_ALBUMS.find(a => a.id === id) ?? MOCK_ALBUMS[0];
        return this.http.get<Album>(`${this.base}/albums/${id}`).pipe(
            timeout(this.TIMEOUT_MS),
            catchError(() => of(fallback)),
        );
    }

    /** Fetch album photos */
    getAlbumPhotos(id: number): Observable<Photo[]> {
        const fallback = MOCK_PHOTOS.map(p => ({ ...p, albumId: id }));
        return this.http.get<Photo[]>(`${this.base}/albums/${id}/photos`).pipe(
            timeout(this.TIMEOUT_MS),
            catchError(() => of(fallback)),
        );
    }

    /** Update album title (simulated) */
    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.base}/albums/${album.id}`, album).pipe(
            timeout(this.TIMEOUT_MS),
            catchError(() => of(album)), // return the updated album locally
        );
    }

    /** Delete album (simulated) */
    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.base}/albums/${id}`).pipe(
            timeout(this.TIMEOUT_MS),
            catchError(() => of(undefined as void)),
        );
    }
}
