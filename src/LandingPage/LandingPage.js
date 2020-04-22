import React from 'react';
import './LandingPage.css';
import HeroBanner from './HeroBanner/HeroBanner';
import heroImage from './../common/images/hero-image.jpg';
import AboutUs from './AboutUs/AboutUs';
import OurGoal from './OurGoal/OurGoal';

export default function LandingPage() {
    return (
        <main className="LandingPage">
            <HeroBanner 
                title="Train & Feel Better Together :)" 
                image={heroImage}
                imageAlt="placeholder text"
                buttonLabel="Register Now"
                buttonLink="/login"
            />
            <div className="container">
                <AboutUs />
                <OurGoal />
            </div>
        </main>
    );
}

