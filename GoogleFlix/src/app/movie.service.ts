import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://google-flix-backend.vercel.app/api/movies';

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<any> {
    const url = `https://google-flix-backend.vercel.app/api/movies?query=${query}`;
    return this.http.get<any>(url);
  }
  
}
