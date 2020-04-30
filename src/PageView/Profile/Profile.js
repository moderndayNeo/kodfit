import React from "react";
import "./Profile.css";
import { Bar } from "react-chartjs-2";
import { barStyles, barChartData } from "../Tracker/Data";
import Goal from "./Goal/Goal";
import UserProfile from "./UserProfile/UserProfile";

export default function Profile() {

    const currentWeight = localStorage.currentWeight;
    const goalWeight = localStorage.goalWeight;

    const setCurrentWeight = (weight) => {
        localStorage.currentWeight = weight;
    };

    const setGoalWeight = (weight) => {
        localStorage.goalWeight = weight;
    };

    console.log(localStorage);

    return (
        <div className="Profile">
            <div className="container">

                {/* <div className="container-content">
                    <div className="profileBox">
                        <div className="profileBox-photo">
                            <img src={userImageUrl} alt={userName} />
                        </div>
                        <h2 className="profileBox-userInfo">{userName}</h2>
                    </div>
                </div> */}

                <UserProfile />
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
                <div className="container-content">
                    <Goal />
                </div>
                <div className="container-content">
                    <h3>Daily Workout Duration</h3>
                    <div className="graph">
                        <Bar data={barChartData} options={barStyles} />
                    </div>
                </div>
            </div>
        </div>
    );
}
