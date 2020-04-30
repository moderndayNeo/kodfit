import React from 'react';
import './Popup.css';

export default function Popup() {
    return (
        <div className="Popup">
            <h2 className="title">Update Your Stats</h2>
            <input type="number" placeholder="Current weight"/>
            <input type="number" placeholder="Goal weight"/>
            <input type="number" placeholder="Age"/>
            <input type="number" placeholder="Height"/>
            <input type="text" placeholder="Sex"/>
        </div>
    );
}
