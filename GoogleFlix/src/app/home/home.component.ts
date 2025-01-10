import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  sections: any[] = [
    {
      title: 'Popular on Netflix',
      items: []
    },
    {
      title: 'Trending Now',
      items: []
    }
  ];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.fetchMovies('avengers'); // Example query, you can change this to other queries
  }

  fetchMovies(query: string) {
    this.movieService.getMovies(query).subscribe({
      next: (movies: any) => {
        console.log('Movies fetched:', movies);
        this.sections[0].items = this.getSixMovies(movies);
        this.sections[1].items = this.getSixMovies(movies);
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
  
        // Handle specific error scenarios
        if (error.status === 0) {
          console.error('Network error: API is unreachable.');
        } else if (error.status >= 400 && error.status < 500) {
          console.error('Client error:', error.message);
        } else if (error.status >= 500) {
          console.error('Server error:', error.message);
        } else {
          console.error('Unexpected error:', error.message);
        }
      }
    });
  }
  
  getSixMovies(movies: any[]): any[] {
    const result = [];
    for (let i = 0; i < Math.min(6, movies.length); i++) {
      result.push(movies[i]);
    }
    return result;
  }
}
