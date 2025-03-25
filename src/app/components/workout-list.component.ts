import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Workout } from '../models/workout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let workout of workouts">
      <h3>{{ workout.date | date : 'yyyy-MM-dd' }}</h3>
      <p>{{ workout.notes }}</p>
    </div>
  `,
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getWorkouts().subscribe((workouts) => {
      this.workouts = workouts;
    });
  }
}
