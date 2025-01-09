import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sections = [
    {
      title: 'Popular on GoogleFlix',
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
}