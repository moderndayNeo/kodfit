import React from 'react';
import './LandingPage.css';
import HeroBanner from './HeroBanner/HeroBanner';
import heroImage from './../common/images/hero-image.jpg';
import AboutUs from './AboutUs/AboutUs';
import OurGoal from './OurGoal/OurGoal';

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <main>
                <HeroBanner 
                    title="Train & Feel Better Together :)" 
                    image={heroImage}
                    imageAlt="placeholder text"
                    buttonLabel="Register Now"
                    buttonLink="/login"
                />
                <AboutUs />
                <OurGoal />
            </main>
            <footer>
                    <p>© Kodfit. All rights reserved.</p>
            </footer>
        </div>
    );
}

