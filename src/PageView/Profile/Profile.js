import React from 'react';
import './Profile.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import { Bar } from 'react-chartjs-2'
import { barOption, data } from '../Tracker/Data';
import Goal from './Goal/Goal';

export default function Profile() {

    const userName = localStorage.getItem('userName');
    const userImageUrl = localStorage.getItem('userImageUrl');

    return (
        <div className="Profile">
            <div className="container">
                <div className="container-content">
                    <div className="profileBox">
                        <div className="profileBox-photo">
                            <img src={userImageUrl} alt={userName} />
                        </div>
                        <h2 className="profileBox-userInfo">{userName}</h2>
                        <PersonalInfo />
                    </div>
                </div>
                <div className="container-content">
                    <Goal />
                </div>
                <div className="container-content">
                    <h3>Daily Workout Duration</h3>
                    <div className="graph">
                        <Bar data={data} options={barOption} />
                    </div>
                </div>
            </div>
        </div>
    )
}
