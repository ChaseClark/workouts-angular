import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginDto, RegisterDto, AuthResponse } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private apiService: ApiService, private router: Router) {}

  login(credentials: LoginDto) {
    return this.apiService.login(credentials).subscribe({
      next: (response: AuthResponse) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('token_expiration', response.expiration);
        const expiresAt = new Date(response.expiration);
        console.log('Token expires at:', expiresAt.toString());
        this.router.navigate(['/workouts']);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }

  register(user: RegisterDto) {
    return this.apiService.register(user).subscribe({
      next: () => this.router.navigate(['/login']),
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  get currentUser$() {
    return this.currentUserSubject.asObservable();
  }

  get token() {
    return localStorage.getItem('token');
  }
}
