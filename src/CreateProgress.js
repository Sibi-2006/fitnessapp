import React from 'react'
import ProgressChart from './ProgressChart'

export default function CreateProgress({goal,setGoal,progressTitle,setProgressTitle,handleProgress,progress}) {
  return (
    <div>
      <form onSubmit={handleProgress} className='mealForm'>
        <input 
            type="text"
            placeholder='Name of the Progress'
            value={progressTitle}
            onChange={e => setProgressTitle(e.target.value)}
        />
        <input 
            type="text"
            placeholder='Goal ?'
            value={goal}
            onChange={e => setGoal(e.target.value)}
        />
        <button className='btn'>Submit</button>
      </form>
      <ProgressChart progress={progress}/>
    </div>
  )
}
