import React from "react";
import "./CentreImage.css";
import jogger from "../../../common/images/female-jogger.jpg";
import { FaDumbbell, FaChartLine, FaHeartbeat } from "react-icons/fa";

export default function CentreImage() {
    return (
        <div className="CentreImage">
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
                            <FaChartLine />
                        </div>
                        <p className="slidingText animated fadeInRight delay-3s">
                            ...Keep track of your progress as you get healthier
                        </p>
                    </div>
                </div>
                <img className="image" src={jogger} alt="Jogger" />
            </div>
        </div>
    );
}
