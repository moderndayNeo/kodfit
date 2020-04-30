import React from 'react';
import './Profile.css';
import { Bar } from 'react-chartjs-2';
import { barStyles, barChartData } from '../Tracker/Data';
import UserProfile from './UserProfile/UserProfile';

export default function Profile() {
    console.log(localStorage);

    return (
        <div className="Profile">
            <UserProfile />
            <Bar className="graph" data={barChartData} options={barStyles} />
        </div>
    );
}

/*
    // const currentWeight = localStorage.currentWeight;
    // const goalWeight = localStorage.goalWeight;

    // const setCurrentWeight = (weight) => {
    //     localStorage.currentWeight = weight;
    // };

    // const setGoalWeight = (weight) => {
    //     localStorage.goalWeight = weight;
    // };

                <br />
                <h1>Weight Markers</h1>
                <input
                    type="number"
                    onChange={(e) => setCurrentWeight(e.target.value)}
                    placeholder="Insert Current Weight Here"
                />
                <input
                    type="number"
                    onChange={(e) => setGoalWeight(e.target.value)}
                    placeholder="Insert Goal Weight Here"
                />
                <button
                    className="button primary"
                    onClick={() => window.location.reload()}
                >
                    Update weight markers
                </button>
                Current weight is: {currentWeight}
                <br />
                Goal weight is: {goalWeight}
                <br />
*/
