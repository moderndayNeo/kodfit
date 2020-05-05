import React from 'react';
import './UserProfile.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';

export default function UserProfile() {
    const userName = localStorage.getItem('userName');
    const userImageUrl = localStorage.getItem('userImageUrl');

    return (
        <div className="UserProfile">
            <img className="userImage" src={userImageUrl} alt={userName} />
            <h2>{userName}</h2>
            <PersonalInfo />
        </div>
    );
}
