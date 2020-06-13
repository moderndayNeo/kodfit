import React from 'react';
import './UserProfile.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import profileImage from '../../../common/images/default-profile-image.png'

export default function UserProfile() {
    let { userName, userImage, userEmail, userGoogleId } = localStorage

    return (
        <div className="UserProfile">
            <img className="userImage" src={userImage || profileImage} alt={userName} />
            <h2>{userName}</h2>
            <PersonalInfo />
        </div>
    );
}
