import React from 'react';
import './LandingPage.css';
import HeroBanner from './HeroBanner/HeroBanner';
import heroImage from './../common/images/hero-image.jpg';
import about from './../common/images/about.jpg';
import ourGoal from './../common/images/our-goal.jpg';

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
            <HeroBanner 
                title="About Us" 
                image={about} 
                imageAlt="placeholder text"
                buttonLabel="Read More"
                buttonLink="/about"
            />
            <HeroBanner 
                title="Our Goal" 
                image={ourGoal} 
                imageAlt="placeholder text"
                buttonLabel="Read More"
                buttonLink="/our-goal"
            />
        </main>
    );
}

