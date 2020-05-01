import React from "react";
import "./Popup.css";
import Input from "./Input/Input";
import { setAge, setCurrentWeight, setHeight, setGoalWeight } from './updateSettings';

export default function Popup({ onClick, faded }) {

    return (
        <div className={`Popup ${faded && "opaque"}`}>
            <h2 className="title">Update Your Stats</h2>
            <div className="container">
                <Input title="Age" type="number" placeholder="--" onChange={e => setAge(e.target.value)} />
                <Input title="Height (cm)" type="number" placeholder="--" onChange={e => setHeight(e.target.value)} />
                <Input title="Current Weight (kg)" type="number" placeholder="--" onChange={e => setCurrentWeight(e.target.value)} />
                <Input title="Goal Weight (kg)" type="number" placeholder="--" onChange={e => setGoalWeight(e.target.value)} />
            </div>
            <button className="button primary" onClick={onClick}>Update</button>
        </div>
    );
}
