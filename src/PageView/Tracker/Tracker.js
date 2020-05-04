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
      <main className='container'>
        <div className='center grid-full'>Your weight goals: {localStorage.goalWeight} kg</div>
        <div className='center grid-full'>Your current weight: {localStorage.currentWeight} kg </div>
        <div className='line-graph grid-full'>
          <Line data={lineChartData} options={lineStyles} />
        </div>
        <div className='grid-full center'>April</div>
        <div className='center grid-full'>Total time spent working out  5 hour 27mins</div>
        <div className='grid-full center'>7 days </div>
        <div className='grid-full center'>Total consecutive days 2 days</div>
        <div className='grid-full  center small-font'> 7 days </div>
        <div className=' grid-full'>
          <Bar data={barChartData} options={barStyles} />
        </div>
        <div className='grid-full center margin-bottom'>April</div>
      </main>
    </div>
  )
}
