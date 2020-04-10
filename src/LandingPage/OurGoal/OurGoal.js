import React from "react";
import "./OurGoal.css";
// import motivational from "../../common/images/ourGoal-motivational.jpg";
// import jogger from "../../common/images/female-jogger.jpg";
import swimmer from "../../common/images/ourGoal-swimming.jpg";

export default function OurGoal() {
  return (
    <div className="OurGoal">
      <h1>Our Goal</h1>
      <hr />
      <p>
        Our goal is to put you in touch with the gyms and trainers nearby. In
        the age of Kodfit, winning is easier than ever before.{" "}

      </p>

    <div className="container">
      <img src={swimmer} alt="Swimmer" />
      <p>
      - icon dumbbell - Put you in touch with gyms and trainers nearby.
        - icon heartbeat -Deliver you a workout routine tailored to your goals.
        - icon rising stock - Keep track of your progress as you improve.
        <br></br>
      </p>

    </div>
     

      <p>
        We want to make fitness easy. It fits in with your schedule you needn't
        travel far. Our goal is to prove that a healthy you is right around the
        corner.
      </p>
      
      <p>       The fitter, stronger you is closer than you think! (Link to Nearby Gyms)</p>
      <button>Find your nearest gyms!</button>
      <button>Find your nearest personal trainer!</button>
    </div>
  );
}

// eslint-disable-next-line
{/* <img src={motivational} alt="Motivational" /> */
/* <img src={jogger} alt="Joger" /> */}