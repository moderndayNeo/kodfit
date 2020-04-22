import React from 'react';
import './CentreImage.css';
import IconAndText from './IconAndText/IconAndText';
import jogger from '../../../common/images/female-jogger.jpg';

export default function CentreImage() {
    return (
        <div className="CentreImage">
            <div className="overlay">
                <IconAndText
                    icon={"FaDumbbell"}
                    text="...Put you in touch with gyms and trainers nearby"
                    delay="1s"
                />
                <IconAndText
                    icon={"FaChartLine"}
                    text="...Deliver a workout routine tailored to your goals"
                    delay="2s"
                />
                <IconAndText
                    icon={"FaHeartbeat"}
                    text="...Keep track of your progress as you get healthier"
                    delay="3s"
                />
            </div>
            <img className="image" src={jogger} alt="Jogger" />
        </div>
    );
}
