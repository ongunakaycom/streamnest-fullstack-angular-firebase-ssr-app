import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8081/movies';

  constructor(private http: HttpClient) { }

  getMovie(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
