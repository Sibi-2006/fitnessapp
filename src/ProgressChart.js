import React from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,ResponsiveContainer } from 'recharts';

export default function ProgressChart({progress}) {
  const cleanedProgress = progress.map(item => ({
    ...item,
    goal: isNaN(item.goal) ? 0 : item.goal
  }));

  return (
    <div style={{ width: '90%', height: '400px', margin: 'auto', marginTop: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>📈 Your Progress Over Time</h2>
      {cleanedProgress.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No progress data yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cleanedProgress}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="goal" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

