import React from 'react';
import './UserProfile.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
// import defaultImage from '../../../common/images/default-user-image.png'
import profileImage from '../../../common/images/default-profile-image.png'

export default function UserProfile() {
    const userName = localStorage.getItem('userName');
    const userImageUrl = localStorage.getItem('userImageUrl');

    return (
        <div className="UserProfile">
            <img className="userImage" src={userImageUrl || profileImage} alt={userName} />
            <h2>{userName}</h2>
            <PersonalInfo />
        </div>
    );
}
