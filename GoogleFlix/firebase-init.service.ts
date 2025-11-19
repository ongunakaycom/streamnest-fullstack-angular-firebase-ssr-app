import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseInitService {
  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);
  }
}