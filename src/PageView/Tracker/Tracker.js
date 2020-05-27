import React from 'react'
import './Tracker.css'
import { Bar, Line } from 'react-chartjs-2'
import { lineChartData, lineStyles, barStyles, barChartData } from './Data'
import 'chartjs-plugin-datalabels'
import WeightDetails from './WeightDetails/WeightDetails'

export default function Tracker () {

console.log(localStorage)

  return (
    <div className='Tracker'>
      <h2 className='separator-center trackerTitle'>Tracker</h2>
      <WeightDetails />
          <Line data={lineChartData} options={lineStyles} />
          <Bar data={barChartData} options={barStyles} />
    </div>
  )
}
