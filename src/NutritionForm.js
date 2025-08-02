import React from 'react'
import './css/mealForm.css'
export default function NutritionForm({meal,setMeal,quantity,setQuantity,calories,setCalories,protein,setProtein,handleFood}) {
  return (
    <div>
      <form onSubmit={handleFood} className='mealForm'>
        <input 
          type="text"
          placeholder='Enter meal name'
          value={meal}
          onChange={e => setMeal(e.target.value)}
        />
        <input 
          type="text"
          placeholder='Enter quantity (e.g. 1 bowl, 2 slices)'
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <input 
          type="text"
          placeholder='Enter calories (kcal)'
          value={calories}
          onChange={e => setCalories(e.target.value)}
        />
        <input 
          type="text"
          placeholder='Enter protein (grams)'
          value={protein}
          onChange={e => setProtein(e.target.value)}
        />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}
