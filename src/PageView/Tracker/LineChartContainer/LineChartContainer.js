import React from 'react'
import './LineChartContainer.css'
import { Line } from 'react-chartjs-2'
import { lineChartData, lineStyles } from '../Data'
import { months } from './months'

export default function LineChartContainer() {
    const today = new Date()
    const currentMonth = months[today.getMonth()]
    const year = today.getFullYear()

    return (
        <div className="LineChartContainer">
            <Line
                className="line-chart"
                data={lineChartData}
                options={lineStyles}
            />
            <p className="line-chart-title">
                {currentMonth} {year}
            </p>
        </div>
    )
}
