import { WorkoutExercise } from './workout-exercise';

export interface Workout {
  id: number;
  notes?: string;
  date: Date;
  userId?: string;
  workoutExercises?: WorkoutExercise[];
}
