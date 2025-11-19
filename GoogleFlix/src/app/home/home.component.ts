import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  sections: any[] = [
    { title: 'Popular on The Open Movie Database', items: [] },
    { title: 'Trending Now', items: [] }
  ];

  isLoading = false;
  errorMessage = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.fetchMovies('avengers'); // Example query
  }

  fetchMovies(query: string) {
    this.isLoading = true;
    this.errorMessage = '';

    this.movieService.getMovies(query).subscribe({
      next: (movies: any) => {
        console.log('Movies fetched:', movies);
        const results = movies.results || movies || [];
        this.sections[0].items = this.getSixMovies(results);
        this.sections[1].items = this.getSixMovies(results);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
        this.errorMessage = 'Failed to fetch movies. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  getSixMovies(movies: any[]): any[] {
    return movies.slice(0, 6); // Take first 6 movies
  }
}
