import React from 'react'
import './WeightDetails.css'
import Detail from './Detail/Detail'

export default function WeightDetails() {
    const difference = localStorage.goalWeight - localStorage.currentWeight
    const target = difference ?
        difference > 0 ?
            `+ ${difference}` :
            `${difference}`
        : '--'

    return (
        <div className="WeightDetails">
            <Detail
                title="Current Weight"
                value={
                    localStorage.currentWeight
                        ? `${localStorage.currentWeight}kg`
                        : '--'
                }
            />
            <Detail
                title="Goal Weight"
                value={
                    localStorage.goalWeight
                        ? `${localStorage.goalWeight}kg`
                        : '--'
                }
            />
            <Detail title="Target" value={target} />
        </div>
    )
}
