import React from 'react'
import './Tracker.css'
import { Bar, Line } from 'react-chartjs-2'
import { lineChartData, lineStyles, barStyles, barChartData } from './Data'
import 'chartjs-plugin-datalabels'
import WeightDetails from './WeightDetails/WeightDetails'
import { months } from './months'
import UserWorkoutStats from './UserWorkoutStats/UserWorkoutStats'

export default function Tracker() {
    const today = new Date()
    const currentMonth = months[today.getMonth()]
    const year = today.getFullYear()

    return (
        <div className="Tracker">
            <h2 className="separator-center">Tracker</h2>
            <WeightDetails />
            <Line data={lineChartData} options={lineStyles} />
            <p className="line-chart-title">
                {currentMonth} {year}
            </p>
            <UserWorkoutStats />
            <Bar data={barChartData} options={barStyles} />
            <p className="bar-chart-title">This Week</p>
        </div>
    )
}
