import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../models/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <input
        [(ngModel)]="credentials.email"
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        [(ngModel)]="credentials.password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
    <!-- <div *ngIf="errorMessage" class="error">
      {{ errorMessage }}
    </div> -->
  `,
})
export class LoginComponent {
  credentials: LoginDto = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.credentials);
  }
}
