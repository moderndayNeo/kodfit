import React from 'react';
import './CentreImage.css';
import IconAndText from './IconAndText/IconAndText';

export default function CentreImage() {
    return (
        <>
            <IconAndText
                icon={"FaDumbbell"}
                text="...Put you in touch with gyms and trainers nearby"
            />
            <IconAndText
                icon={"FaChartLine"}
                text="...Deliver a workout routine tailored to your goals"
            />
            <IconAndText
                icon={"FaHeartbeat"}
                text="...Keep track of your progress as you get healthier"
            />
        </>
    );
}
