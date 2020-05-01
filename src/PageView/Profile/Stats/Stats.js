import React from 'react';
import './Stats.css';

export default function Stats() {
    return (
        <section className="Stats">
        <h2>Your Stats</h2>
        <p>Goal weight: {localStorage.goalWeight}kg</p>
        <p>Current weight: {localStorage.currentWeight}kg</p>
        <p>BMI</p>
        <p>Target BMI</p>
    </section>
    );
}
