import React from 'react';
import './OurGoal.css';
import 'animate.css';
import 'hover.css';
import CentreImage from './CentreImage/CentreImage';
import { Link } from 'react-router-dom';

export default function OurGoal() {
  return (
    <div className="OurGoal">
      <h1 className="block">Our Goal</h1>
      <p className="separator-center">
        Our goal is to put you in touch with gyms and personal trainers nearby.
        In the age of Kodfit, winning is easier than ever before.
      </p>
      <CentreImage />
      <p className="separator-center">
        The fitter, stronger you is closer than you think
      </p>
      <Link to="/login">
        <button className="hvr-shutter-out-horizontal button primary">
          Join The Revolution
        </button>
      </Link>
    </div>
  );
}