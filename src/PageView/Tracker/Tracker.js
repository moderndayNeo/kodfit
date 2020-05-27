import React from 'react'
import './Tracker.css'
import { Bar, Line } from 'react-chartjs-2'
import { lineChartData, lineStyles, barStyles, barChartData } from './Data'
import 'chartjs-plugin-datalabels'
import WeightDetails from './WeightDetails/WeightDetails'
import UserWorkoutStats from './UserWorkoutStats/UserWorkoutStats'
import LineChartContainer from './LineChartContainer/LineChartContainer'

export default function Tracker() {


    return (
        <div className="Tracker">
            <h2 className="separator-center">Tracker</h2>
            <WeightDetails />
            <LineChartContainer />
            <UserWorkoutStats />
            <Bar data={barChartData} options={barStyles} />
            <p className="bar-chart-title">This Week</p>
        </div>
    )
}
