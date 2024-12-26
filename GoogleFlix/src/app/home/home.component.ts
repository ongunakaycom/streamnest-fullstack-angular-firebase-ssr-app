import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sections: any[] = [
    {
      title: 'Trending Now',
      items: [
        { title: 'Movie 1', image: 'assets/movie1.jpg' },
        { title: 'Movie 2', image: 'assets/movie2.jpg' }
      ]
    },
    {
      title: 'Top Picks for You',
      items: [
        { title: 'Movie 3', image: 'assets/movie3.jpg' },
        { title: 'Movie 4', image: 'assets/movie4.jpg' }
      ]
    }
  ];
}