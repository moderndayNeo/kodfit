import React from 'react';
import './PersonalInfo.css';

export default function PersonalInfo() {
    return (
        <div className="PersonalInfo">

            <div className="detail">
                <p className="title">Age</p>
                <p className="value">25</p>
            </div>
            <div className="detail">
                <p className="title">Sex</p>
                <p className="value">M</p>
            </div>
            <div className="detail">
                <p className="title">Height</p>
                <p className="value">186</p>
            </div>

        </div>
    );
}
