import React from "react";
import "./OurGoal.css";
import "animate.css";
import "hover.css";
import { Link } from "react-router-dom";
import jogger from "../../common/images/female-jogger.jpg";
import { FaDumbbell, FaChartLine, FaHeartbeat } from "react-icons/fa";

export default function OurGoal() {
  return (
    <div className="OurGoal">
      <h1>Our Goal</h1>
      <p className="subtext">
        Our goal is to put you in touch with gyms and personal trainers nearby.
        In the age of Kodfit, winning is easier than ever before.
      </p>
      <div className="container">
        <div className="overlay">
          <div className="iconAndText">
            <div className="icon animated fadeInLeft delay-1s">
              <FaDumbbell />
            </div>
            <p className="slidingText animated fadeInRight delay-1s">
              ...Put you in touch with gyms and trainers nearby
            </p>
          </div>
          <div className="iconAndText">
            <div className="icon animated fadeInLeft delay-2s">
              <FaHeartbeat />
            </div>
            <p className="slidingText animated fadeInRight delay-2s">
              ...Deliver a workout routine tailored to your goals
            </p>
          </div>
          <div className="iconAndText">
            <div className="icon animated fadeInLeft delay-3s">
              {/* <ProgressIcon /> */}
              <FaChartLine />
            </div>
            <p className="slidingText animated fadeInRight delay-3s">
              ...Keep track of your progress as you get healthier
            </p>
          </div>
        </div>
        <img className="image" src={jogger} alt="Jogger" />
      </div>
    
      <p className="quote">
        The fitter, stronger you is closer than you think
      </p>
      <Link to="/near-me-gyms">
        <button className="hvr-shutter-out-horizontal">
          Find your nearest gym!
        </button>
      </Link>
      <Link to="/near-me-trainers">

        <button className="hvr-shutter-out-horizontal">
          Find your nearest personal trainer!
        </button>
      </Link>
   
    </div>
  );
}