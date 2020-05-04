import React from 'react'
import './Tracker.css'
import { Bar, Line } from 'react-chartjs-2'
import { line, option, barOption, data } from './Data'
import 'chartjs-plugin-datalabels'

export default function Tracker () {
  return (
    <div className='Tracker'>
      <h2 className='trackerTitle'>Tracker</h2>
      <main className='container'>
        <div className='tracker'>Your weight goals:</div>
        <div>82kgs</div>
        <div className='weight'>Your current weight:</div>
        <div>78kgs</div>
        <div className='line-graph grid-full'>
          <Line data={line} options={option} />
        </div>
        <div className='grid-full center'>April</div>
        <div>Total time spent working out</div>
        <div>5 hour 27mins</div>
        <div className='grid-full small-font'>7 days </div>
        <div>Total consecutive days</div>
        <div> 2 days </div>
        <div className='grid-full small-font'> 7 days </div>
        <div className=' grid-full'>
          <Bar data={data} options={barOption} />
        </div>
        <div className='grid-full center margin-bottom'>April</div>
      </main>
    </div>
  )
}
