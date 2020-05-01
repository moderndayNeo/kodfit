import React from "react";
import "./Popup.css";
import Input from "./Input/Input";

export default function Popup() {
    return (
        <div className="Popup">
            <h2 className="title">Update Your Stats</h2>
            <div className="container">
                <Input title="Age" type="number" placeholder="--" />
                <Input title="Height" type="number" placeholder="--" />
                <Input title="Current Weight" type="number" placeholder="--" />
                <Input title="Goal Weight" type="number" placeholder="--" />
            <select>
                <option>Male</option>
                <option>Female</option>
            </select>
            </div>
            <button className="button primary">Submit</button>
        </div>
    );
}
