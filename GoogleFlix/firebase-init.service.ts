import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class FirebaseInitService {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDUN24OIuoC6IDvzmjMVJ_DG7RaV5auSJw",
      authDomain: "gpt-500ef.firebaseapp.com",
      projectId: "gpt-500ef",
      storageBucket: "gpt-500ef.firebasestorage.app",
      messagingSenderId: "631149878533",
      appId: "1:631149878533:web:07b355e14ddfdac026eb6c",
      measurementId: "G-JFMZKSDEE7"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}