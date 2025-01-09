import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // This URL should point to your Go backend endpoint
  private apiUrl = 'http://localhost:8081/movies'; // Go backend URL

  constructor(private http: HttpClient) {}

  // Method to get movies by title
  getMovies(title: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?title=${title}`);
  }
}
