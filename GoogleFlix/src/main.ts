import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { routes } from './app/app.routes'; // Correct the import here
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Use 'routes' here
    provideAnimations(),
  ],
}).catch(err => console.error(err));