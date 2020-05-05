import React, { useEffect } from 'react';
import './Stats.css';
import { roundedGoalBMI, roundedCurrentBMI } from './bmiCalculations';

export default function Stats({ setBmi }) {
    useEffect(() => {
        console.log('Page refreshed');
    }, [setBmi]);

    return (
        <section className="Stats">
            <h2>Your Stats</h2>
            <div className="stats-container">
                <p>
                    Current weight:{' '}
                    {localStorage.currentWeight
                        ? `${localStorage.currentWeight}kg`
                        : '--'}
                </p>
                <p>
                    BMI: {!isNaN(roundedCurrentBMI) ? roundedCurrentBMI : '--'}
                </p>
                <p>
                    Goal weight:{' '}
                    {localStorage.goalWeight
                        ? `${localStorage.goalWeight}kg`
                        : '--'}
                </p>
                <p>
                    Target BMI: {!isNaN(roundedGoalBMI) ? roundedGoalBMI : '--'}
                </p>
            </div>
        </section>
    );
}
