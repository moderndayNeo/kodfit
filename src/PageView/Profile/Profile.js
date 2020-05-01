import React, { useState } from "react";
import "./Profile.css";
import { Bar } from "react-chartjs-2";
import { barStyles, barChartData } from "../Tracker/Data";
import UserProfile from "./UserProfile/UserProfile";
import Popup from "./Popup/Popup";

export default function Profile() {
    const [popup, setPopup] = useState(true);

    console.log(localStorage);

    return (
        <div className="Profile">
            <button
                className="button primary rounded-capsule update-stats"
                onClick={() => setPopup(!popup)}
            >
                Update your stats
            </button>
            {popup && <Popup onClick={() => setPopup(!popup)} />}
            <UserProfile />
            <section className="stats">
                <h2>Your Stats</h2>
                <p>Goal weight: {localStorage.goalWeight}kg</p>
                <p>Current weight: {localStorage.currentWeight}kg</p>
                <p>BMI</p>
                <p>Target BMI</p>
            </section>
            <Bar className="graph" data={barChartData} options={barStyles} />
        </div>
    );
}
