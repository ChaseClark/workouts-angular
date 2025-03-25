import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { WorkoutListComponent } from './components/workout-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'workouts', component: WorkoutListComponent },
  { path: '', redirectTo: '/workouts', pathMatch: 'full' },
  //   { path: '**', redirectTo: '/workouts' },
];
