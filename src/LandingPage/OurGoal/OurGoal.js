import React from 'react';
import './OurGoal.css';
import { Link } from "react-router-dom";
import Goal from "../../common/images/goal.jpg";
import CentreImage from './CentreImage/CentreImage';

export default function OurGoal() {
  return (
    <div className="OurGoal">
      <div className="copy">
        <h1 className="separator-left">Our Goal</h1>
        <p>
          Our goal is to put you in touch with gyms and personal trainers nearby.
          In the age of Kodfit, winning is easier than ever before.
        </p>
        <CentreImage />
        <blockquote>
          The fitter, stronger you is closer than you think
        </blockquote>
        <button className="button primary rounded-capsule">
          <Link to="/login">
            Join The Revolution
          </Link>
        </button>
      </div>
      <div className="image">
        <img className="image" src={Goal} alt="Goal" />
      </div>
    </div>
  );
}