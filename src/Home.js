import React from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-container">
      <ul className="nav-list">
        <li>
          <Link to="/workoutform">Workout Form</Link>
        </li>
        <li>
          <Link to="/workoutlist">Workout List</Link>
        </li>
        <li>
          <Link to="/nutritionform">Nutrition Form</Link>
        </li>
        <li>
          <Link to="/meallist">Meal List</Link>
        </li>
        <li>
          <Link to='/createprogress'>Progress Chart</Link>
        </li>
        <li>
          <Link to="/calendartracker">Calendar Tracker</Link>
        </li>
        <li>
          <Link to="/bmr" >BMR</Link>
        </li>
      </ul>
    </div>
  )
}
