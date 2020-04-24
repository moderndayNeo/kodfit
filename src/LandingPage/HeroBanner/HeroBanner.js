import React from 'react';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

export default function HeroBanner(props) {
    return (
        <div className="HeroBanner">
            <div className="hero-overlay text-center">
                <h1>{props.title}</h1>
                <button className="button primary rounded-capsule">
                    <Link to={props.buttonLink}>
                        {props.buttonLabel}
                    </Link>
                </button>
            </div>
            <img 
                src={props.image} 
                alt={props.imageAlt} 
                className="hero-image overlay"
            />
        </div>
    );
}