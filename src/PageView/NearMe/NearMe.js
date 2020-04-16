import React from 'react';
import './NearMe.css';
import { Link } from 'react-router-dom';

export default function NearMe() {
    return (
        <div className="NearMe">
            <div className="container">
                <Link to="/dashboard/near-me-gyms">
                    <div className="container-content">Near by Gym</div>
                </Link>
                <Link to="/near-me-trainers">
                    <div className="container-content">Near by Trainer</div>
                </Link>
            </div>
        </div>
    )
}
