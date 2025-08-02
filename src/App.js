import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import CalendarTracker from './CalendarTracker';
import NutritionForm from './NutritionForm';
import MealList from './MealList';
import Home from './Home';
import CreateProgress from './CreateProgress';
import Bmr from './Bmr';

function App() {
  //current date as DD-MM-YYYY
  const getCurrentDate = () => {
    const isoDate = new Date().toISOString().split('T')[0];
    const [year, month, day] = isoDate.split('-');
    return `${day}-${month}-${year}`;
  };

  //Workout state
  const [workout, setWorkout] = useState('');
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [workoutList, setWorkoutList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workout || !workoutTitle) {
      alert('Please fill out both fields');
      return;
    }
    const newWorkout = {
      id: Date.now(),
      title: workoutTitle,
      workout: workout,
      date: getCurrentDate()
    };
    setWorkoutList([...workoutList, newWorkout]);
    setWorkout('');
    setWorkoutTitle('');
  };

  const handleWorkoutDelete = (id) => {
    const updatedWorkouts = workoutList.filter(item => item.id !== id);
    setWorkoutList(updatedWorkouts);
  };

  // LocalStorage for workouts
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (savedWorkouts) {
      setWorkoutList(savedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workoutList));
  }, [workoutList]);

  //Nutrition state
  const [meal, setMeal] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [foodList, setFoodList] = useState([]);

  const handleFood = (e) => {
    e.preventDefault();
    if (!meal || !quantity || !calories || !protein) {
      alert('Please fill out all fields');
      return;
    }
    const newFood = {
      id: Date.now(),
      meal,
      quantity,
      calories,
      protein,
      date: getCurrentDate()
    };
    setFoodList([...foodList, newFood]);
    setMeal('');
    setQuantity('');
    setCalories('');
    setProtein('');
  };

  const handleFoodDelete = (id) => {
    const updatedFoods = foodList.filter(item => item.id !== id);
    setFoodList(updatedFoods);
  };

  //LocalStorage for meals
  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem('meals'));
    if (savedMeals) {
      setFoodList(savedMeals);
    }
  }, []);

  useEffect(() => {
    console.log("Saving meals to localStorage:", foodList);
  }, [foodList]);

  //Calendar Tracker
  const [calendarDate, setCalendarDate] = useState('');
  const [logs, setLogs] = useState({
    meals: [],
    workouts: []
  });

  const formatDate = (inputDate) => {
    const [year, month, day] = inputDate.split('-');
    return `${day}-${month}-${year}`;
  };

  const handleDate = (e) => {
    e.preventDefault();
    const mealsForDate = foodList.filter(item => item.date === formatDate(calendarDate));
    const workoutsForDate = workoutList.filter(item => item.date === formatDate(calendarDate));
    setLogs({
      meals: mealsForDate,
      workouts: workoutsForDate
    });
  };
  //for progress
  const [progress , setProgress] = useState([]);
  const [progressTitle , setProgressTitle] = useState('');
  const [goal , setGoal] =useState('');
  const handleProgress = (e) =>{
    e.preventDefault();

    const newProgress = {
      progressTitle:progressTitle,
      goal:parseFloat(goal),
      date: getCurrentDate()
    }
    setProgress([...progress , newProgress]);
    setGoal('');
    setProgressTitle('');
  }
  //BMR

  const [height,setHeight] = useState('');
  const [weight , setWeight] = useState('') ;
  const [gender , setGender] = useState('');
  const [age, setAge] = useState('');
  //App routes
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/workoutform' element={
            <WorkoutForm
              workout={workout}
              setWorkout={setWorkout}
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              handleSubmit={handleSubmit}
            />
          } />

          <Route path='/workoutlist' element={
            <WorkoutList
              workoutlist={workoutList}
              handleWorkoutDelete={handleWorkoutDelete}
            />
          } />

          

          <Route path='/calendartracker' element={
            <CalendarTracker
              calendarDate={calendarDate}
              setCalenderDate={setCalendarDate}
              handleDate={handleDate}
              logs={logs}
            />
          } />

          <Route path='/nutritionform' element={
            <NutritionForm
              meal={meal}
              setMeal={setMeal}
              quantity={quantity}
              setQuantity={setQuantity}
              calories={calories}
              setCalories={setCalories}
              protein={protein}
              setProtein={setProtein}
              handleFood={handleFood}
            />
          } />

          <Route path='/meallist' element={
            <MealList
              foodList={foodList}
              handleFoodDelete={handleFoodDelete}
            />
          } />
          <Route path='/createprogress' element={<CreateProgress 
            goal={goal}
            setGoal={setGoal}
            progressTitle={progressTitle}
            setProgressTitle={setProgressTitle}
            handleProgress={handleProgress}    
            progress={progress}
          />} />

          <Route path='/bmr' element={<Bmr
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
            gender={gender}
            setGender={setGender}
            age={age}
            setAge={setAge}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
