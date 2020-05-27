import React from 'react'
import './BarChartContainer.css'
import { Bar } from 'react-chartjs-2'
import { barStyles, barChartData } from '../Data'

export default function BarChartContainer() {
    return (
        <div className="BarChartContainer">
            <Bar data={barChartData} options={barStyles} />
            <p className="bar-chart-title">This Week</p>
        </div>
    )
}
