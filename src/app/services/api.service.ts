import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from '../models/workout';
import { Category } from '../models/category';
import { Exercise } from '../models/exercise';
import { WorkoutExercise } from '../models/workout-exercise';
import { AuthResponse, LoginDto, RegisterDto } from '../models/auth';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5073'; // TODO: move to ENV

  constructor(private http: HttpClient) {}

  // Auth endpoints
  register(user: RegisterDto) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials);
  }

  // Workout endpoints
  getWorkouts() {
    return this.http.get<Workout[]>(`${this.apiUrl}/workouts`);
  }

  createWorkout(workout: Workout) {
    return this.http.post(`${this.apiUrl}/workouts`, workout);
  }

  // Category endpoints
  getCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  createCategory(category: Category) {
    return this.http.post(`${this.apiUrl}/categories`, category);
  }

  // Exercise endpoints
  getExercises() {
    return this.http.get<Exercise[]>(`${this.apiUrl}/exercises`);
  }

  addExerciseToWorkout(workoutId: number, exercise: WorkoutExercise) {
    return this.http.post(
      `${this.apiUrl}/workouts/${workoutId}/exercises`,
      exercise
    );
  }
}
