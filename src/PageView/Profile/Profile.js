import React from 'react';
import './Profile.css';

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
                        <h3 className="profileBox-userInfo">{userName}, 24</h3>
                    </div>
                    <div className="personalInfo">
                        <div className="personalInfo-content">
                            <span>weight</span>
                            <span className="text-bold">50kg</span>
                        </div>
                        <div className="personalInfo-content">
                            <span>height</span>
                            <span className="text-bold">160 cm</span>
                        </div>
                        <div className="personalInfo-content">
                            <span>bmi</span>
                            <span className="text-bold">19.5</span>
                        </div>
                        <div className="personalInfo-content">
                            <span>sex</span>
                            <span className="text-bold">F</span>
                        </div>
                    </div>
                    <div className="goal">
                        <h4>Goal</h4>
                        <div className="goal-weight">
                            <span>weight</span>
                            <span>48 kg</span>
                        </div>
                        <div className="goal-weight">
                            <span>bmi</span>
                            <span>18.7</span>
                        </div>

                    </div>
                </div>
                <div className="container-content">
                    <h3>Daily Workout Duration</h3>
                    <div className="durationGraph">
                        Here will be graph
                    </div>
                </div>
            </div>
        </div>
    )
}
