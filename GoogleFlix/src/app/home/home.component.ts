import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../movie.service'; // Correct path

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
  providers: [MovieService] // Ensure MovieService is provided
})
export class HomeComponent implements OnInit {
  sections: any[] = [
    {
      title: 'Popular on NetFlix',
      items: []
    },
    {
      title: 'Trending Now',
      items: []
    }
  ];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe( // Ensure method name matches the service
      (movies: any) => {
        console.log('Movies fetched:', movies);
        // Assuming movie data is an array
        this.sections[0].items = movies; // Populate with movies
        this.sections[1].items = movies; // Populate with movies
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
