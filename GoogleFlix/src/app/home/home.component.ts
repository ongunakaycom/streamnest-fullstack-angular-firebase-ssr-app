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
      title: 'Popular on The Open Movie Database',
      items: []
    },
    {
      title: 'Trending Now',
      items: []
    }
  ];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.fetchMovies('avengers'); // Example query, modify as needed
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
        switch (error.status) {
          case 0:
            alert('Network error: Unable to reach the API.');
            break;
          case 404:
            alert('No movies found for the given query.');
            break;
          case 500:
            alert('Server error: Please try again later.');
            break;
          default:
            alert('An unexpected error occurred.');
        }
      }
    });
  }
  

  getSixMovies(movies: any[]): any[] {
    return movies.slice(0, 6); // Simplified slicing logic
  }
}
