import React from 'react';
import './UserProfile.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';

export default function UserProfile() {
    const userName = localStorage.getItem("userName");
    const userImageUrl = localStorage.getItem("userImageUrl");

    return (
        <div className="UserProfile">

            {/* <img
                className="user-image"
                src={userImageUrl}
                alt={userName}
            />
            <h2 className="userName">{userName}</h2> */}

<div className="container-content">
                    <div className="profileBox">
                        <div className="profileBox-photo">
                            <img src={userImageUrl} alt={userName} />
                        </div>
                        <h2 className="profileBox-userInfo">{userName}</h2>
                    </div>
                </div>
            <PersonalInfo />
        </div>
    );
}
