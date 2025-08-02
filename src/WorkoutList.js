import React from 'react';
import './css/WorkoutList.css'
export default function WorkoutList({ workoutlist ,handleWorkoutDelete}) {

  
  return (
    <div >
      <h1 className='title'>Workout List</h1>
      {workoutlist.length>0? workoutlist.map((item) => (
        <div key={item.id} className='workout-list'>
          <h1>{item.title}</h1>
          <p className='workout'>{item.workout}</p>
          <p><samp className='date'><strong>Date:</strong> </samp>{item.date}</p>
          <button onClick={()=>handleWorkoutDelete(item.id)} className='delete'>Delete</button>
        </div>
      )) : <h1 className='err'>You don't have a Workout List...</h1> }

      
    </div>
  );
}
