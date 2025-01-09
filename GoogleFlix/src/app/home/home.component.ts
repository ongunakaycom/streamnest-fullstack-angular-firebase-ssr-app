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
  sections = [
    {
      title: 'Popular on NetFlix',
      items: [
        { title: 'Movie 1', image: '' },
        { title: 'Movie 2', image: '' },
        { title: 'Movie 3', image: '' },
        { title: 'Movie 4', image: '' },
        { title: 'Movie 5', image: '' },
        { title: 'Movie 6', image: '' }
      ]
    },
    {
      title: 'Trending Now',
      items: [
        { title: 'Show 1', image: '' },
        { title: 'Show 2', image: '' },
        { title: 'Show 3', image: '' },
        { title: 'Show 4', image: '' },
        { title: 'Show 5', image: '' },
        { title: 'Show 6', image: '' }
      ]
    }
  ];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovie().subscribe((movie: any) => { // Explicitly type the parameter
      console.log(movie);
      // You can now use the movie data to update your sections
    });
  }
}
