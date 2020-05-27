import React from 'react'
import './WeightDetails.css'

export default function WeightDetails() {

    const difference = localStorage.goalWeight - localStorage.currentWeight

    return (
        <div className="WeightDetails">
            <p>Goal Weight: {localStorage.goalWeight} kg</p>
            <p>Current Weight: {localStorage.currentWeight} kg </p>
            <p>Target: {
                difference ?
                    difference > 0 ?
                        `+${difference}` :
                        `${difference}`
                    :
                    '--'
                
                } kg
            </p>
        </div>
    )
}
