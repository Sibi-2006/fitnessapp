import React from 'react';
import './css/calander.css'
import './css/mealList.css'
import './css/WorkoutList.css'
export default function CalendarTracker({ calendarDate, setCalenderDate, handleDate, logs }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className='title'>📅 Calendar Tracker</h1>
      <form onSubmit={handleDate} className='calender'>
        <input 
          type="date"
          value={calendarDate}
          onChange={e => setCalenderDate(e.target.value)}
        />
        <button type='submit' style={{ marginLeft: '10px' }} className='btn'>Submit</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {logs.meals?.length > 0 && (
          <div className='foodList'>
            <h3>🍽 Meals on {calendarDate}:</h3>
            <ul>
              {logs.meals.map(item => (
                <li key={item.id}>
                  <strong>{item.meal}</strong> - {item.quantity} - {item.calories} cal - {item.protein}g protein
                </li>
              ))}
            </ul>
          </div>
        )}

        {logs.workouts?.length > 0 && (
          <div style={{ marginTop: '20px' }} className='workout-list'>
            <h3>🏋️ Workouts on {calendarDate}:</h3>
            <ul>
              {logs.workouts.map(item => (
                <li key={item.id}>
                  <strong>{item.title}</strong>: <br></br> {item.workout}
                </li>
              ))}
            </ul>
          </div>
        )}

        {logs.meals?.length === 0 && logs.workouts?.length === 0 && (
          <h1 className='err'>No logs found for this date.</h1>
        )}
      </div>
    </div>
  );
}
