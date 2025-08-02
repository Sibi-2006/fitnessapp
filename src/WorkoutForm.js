import React from 'react';
import './css/WorkoutForm.css'
export default function WorkoutForm({ workout, setWorkout, workoutTitle, setWorkoutTitle, handleSubmit }) {
  return (
    <div className='Workout-con'>
      
      <form onSubmit={handleSubmit} className='WorkoutForm'>
        <h1>What's today's Workout plan? 🏋️‍♂️</h1>
        <input 
          type="text" 
          placeholder="Name a workout?" 
          value={workoutTitle}
          onChange={(e) => setWorkoutTitle(e.target.value)}
        />
        
        <textarea
          rows="5"
          cols="40"
          placeholder="Describe the workout (sets, reps, etc.)"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
        ></textarea>

        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
}
