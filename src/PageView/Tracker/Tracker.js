import React from 'react'
import './Tracker.css'
import { Bar, Line } from 'react-chartjs-2'
import { lineChartData, lineStyles, barStyles, barChartData } from './Data'
import 'chartjs-plugin-datalabels'

export default function Tracker () {

console.log(localStorage)

  return (
    <div className='Tracker'>
      <h2 className='separator-center trackerTitle'>Tracker</h2>
        <div>Goal Weight: {localStorage.goalWeight} kg</div>
        <div>Current Weight: {localStorage.currentWeight} kg </div>
          <Line data={lineChartData} options={lineStyles} />

          <Bar data={barChartData} options={barStyles} />
    </div>
  )
}
