import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forRoot(routes), // Configure routes here
    HomeComponent, // Import standalone component
    LoginComponent, // Import standalone component
    RegisterComponent, // Import standalone component
    VideoPlayerComponent // Import standalone component
  ],
  providers: [],
})
export class AppModule { }