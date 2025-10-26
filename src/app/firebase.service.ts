import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../env/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private auth;
  private app;
  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(this.app);
  }

  getAuthInstance() {
    return this.auth;
  }
}
