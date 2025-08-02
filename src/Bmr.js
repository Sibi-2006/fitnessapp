import React from 'react';
import BmrCal from './BmrCal';

export default function Bmr({ height, setHeight, weight, setWeight, gender, setGender, age, setAge }) {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
        
    let pro =0;

    let bmr = 0;
    if (gender === 'male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5;
        pro = w*2;
    } else if (gender === 'female') {
        bmr = 10 * w + 6.25 * h - 5 * a - 161;
        pro = w*1.7;
    }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()} className='mealForm'>
        <input
          type="text"
          placeholder='Height in cm'
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder='Weight in kg'
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder='Age in years'
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <select value={gender} onChange={e => setGender(e.target.value)} className='btn'>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </form>

      <h2>{isNaN(bmr) ? "Please fill all fields" : <BmrCal bmr={bmr} pro={pro}/>}</h2>
    </div>
  );
}
