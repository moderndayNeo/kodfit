import React, { useState } from 'react';
import './Profile.css';
import UserProfile from './UserProfile/UserProfile';
import Popup from './Popup/Popup';
import PopupButton from './PopupButton/PopupButton';
import Stats from './Stats/Stats';
import BarChartContainer from '../Tracker/BarChartContainer/BarChartContainer'

export default function Profile() {
    const [popup, setPopup] = useState(false);

    const updateStats = () => {
        setPopup(!popup);
        window.location.reload();
    };

    return (
        <div className="Profile">
            <PopupButton onClick={() => setPopup(!popup)} />
            {popup && <Popup onClick={() => updateStats()} />}
            <UserProfile />
            <Stats />
            <BarChartContainer />
        </div>
    );
}
