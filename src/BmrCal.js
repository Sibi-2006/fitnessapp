import React from 'react'

export default function BmrCal({bmr,pro}) {
  return (
    <div>
      <h2>BMR :-</h2>
      <h4>{bmr} : kcal/day</h4>
      <h4>{pro} : pre day</h4>
    </div>
  )
}
