import React from "react";
import "./UserProfile.css";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

export default function UserProfile() {
    const userName = localStorage.getItem("userName");
    const userImageUrl = localStorage.getItem("userImageUrl");

    return (
        <div className="UserProfile">
                    <div className="profileBox-photo">
                        <img src={userImageUrl} alt={userName} />
                    </div>
                    <h2 className="profileBox-userInfo">{userName}</h2>
            <PersonalInfo />
        </div>
    );
}
