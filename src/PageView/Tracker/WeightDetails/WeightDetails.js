import React from 'react'
import './WeightDetails.css'

export default function WeightDetails() {
    return (
        <div className="WeightDetails">
            <p>Goal Weight: {localStorage.goalWeight} kg</p>
            <p>Current Weight: {localStorage.currentWeight} kg </p>
        </div>
    )
}
