import React from "react";
import "./Popup.css";
import InputField from "./InputField/InputField";
import {
    setAge,
    setCurrentWeight,
    setHeight,
    setGoalWeight,
} from "./updateSettings";

export default function Popup({ onClick }) {
    return (
        <div className="Popup">
            <div className="popup-box">
                <h2 className="title">Update Your Stats</h2>
                <div className="centre-text">
                    <InputField
                        title="Age"
                        type="number"
                        placeholder={localStorage.age ? localStorage.age : "--"}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <InputField
                        title="Height (cm)"
                        type="number"
                        placeholder={
                            localStorage.height ? localStorage.height : "--"
                        }
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <InputField
                        title="Current Weight (kg)"
                        type="number"
                        placeholder={
                            localStorage.currentWeight
                                ? localStorage.currentWeight
                                : "--"
                        }
                        onChange={(e) => setCurrentWeight(e.target.value)}
                    />
                    <InputField
                        title="Goal Weight (kg)"
                        type="number"
                        placeholder={
                            localStorage.goalWeight
                                ? localStorage.goalWeight
                                : "--"
                        }
                        onChange={(e) => setGoalWeight(e.target.value)}
                    />
                </div>
                <button className="button primary" onClick={onClick}>
                    Update
                </button>
            </div>
        </div>
    );
}
