import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<any> {
    const url = `https://google-flix-backend.vercel.app/api/movies?query=${query}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching movies:', error.message || error.status || error);
        // Return a user-friendly error observable
        return throwError(() => new Error('Failed to fetch movies. Please try again later.'));
      })
    );
  }
  
}
