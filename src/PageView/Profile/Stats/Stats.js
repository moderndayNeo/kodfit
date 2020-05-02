import React from "react";
import "./Stats.css";
import { roundedGoalBMI, roundedCurrentBMI } from "./bmiCalculations";

export default function Stats() {
    return (
        <section className="Stats">
            <h2>Your Stats</h2>
            <div className="stats-container">
                <p>Current weight: {localStorage.currentWeight}kg</p>
                <p>BMI: {roundedCurrentBMI}</p>
                <p>Goal weight: {localStorage.goalWeight}kg</p>
                <p>Target BMI: {roundedGoalBMI}</p>
            </div>
        </section>
    );
}
