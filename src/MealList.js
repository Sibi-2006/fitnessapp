import React from 'react'
import './css/mealList.css'
export default function MealList({foodList,handleFoodDelete}) {
  return (
    <div>
      <h1 className='title'>Meal List</h1>
      {foodList.length>0 ? 
          foodList.map((food)=>(
            <div key={food.id} className='foodList'>
              <h3><strong>Meal : </strong>{food.meal}</h3>
              <h3><strong>Quantity : </strong>{food.quantity}</h3>
              <h3><strong>Calories : </strong>{food.calories} (kcal)</h3>
              <h3><strong>protein : </strong>{food.protein} g</h3>
              <button onClick={()=>handleFoodDelete(food.id)} className='delete'>Delete</button>
            </div>  
          ))
        
      
            : <h1 className='err'>You don't have a food List</h1>}
    </div>
  )
}
