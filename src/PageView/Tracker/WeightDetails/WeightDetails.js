import React from 'react'
import './WeightDetails.css'
import Detail from './Detail/Detail'

export default function WeightDetails() {
    const difference = localStorage.goalWeight - localStorage.currentWeight
    const target = difference > 0 ? `+ ${difference}` : `${difference}`

    return (
        <div className="WeightDetails">
            <Detail title="Goal Weight" value={localStorage.goalWeight} />
            <Detail title="Current Weight" value={localStorage.currentWeight} />
            <Detail title="Target" value={target} />
        </div>
    )
}
