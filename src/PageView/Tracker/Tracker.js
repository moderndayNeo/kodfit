import React from 'react'
import './Tracker.css'
import 'chartjs-plugin-datalabels'
import WeightDetails from './WeightDetails/WeightDetails'
import UserWorkoutStats from './UserWorkoutStats/UserWorkoutStats'
import LineChartContainer from './LineChartContainer/LineChartContainer'
import BarChartContainer from './BarChartContainer/BarChartContainer'

export default function Tracker() {


    return (
        <div className="Tracker">
            <h2 className="separator-center">Tracker</h2>
            <WeightDetails />
            <LineChartContainer />
            <UserWorkoutStats />
            <BarChartContainer />
        </div>
    )
}
