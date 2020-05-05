import React from 'react';
import './PersonalInfo.css';

export default function PersonalInfo() {
    return (
        <div className="PersonalInfo">
            <div className="detail">
                <p className="title">Age</p>
                <p className="value">
                    {localStorage.age ? localStorage.age : '--'}
                </p>
            </div>
            <div className="detail">
                <p className="title">Sex</p>
                <p className="value">
                    {localStorage.sex ? localStorage.sex : 'M'}
                </p>
            </div>
            <div className="detail">
                <p className="title">Height</p>
                <p className="value">
                    {localStorage.height
                        ? `${localStorage.height / 100}m`
                        : '--'}
                </p>
            </div>
        </div>
    );
}
