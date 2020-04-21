import React from 'react';
import './IconAndText.css';
import { FaDumbbell, FaChartLine, FaHeartbeat } from 'react-icons/fa';

export default function IconAndText({ text, delay, icon }) {
    return (
        <div className="IconAndText">
                <div className={`icon animated fadeInLeft delay-${delay}`}>
                    {icon === "FaDumbbell" ? (
                        <FaDumbbell />
                    ) : icon === "FaChartLine" ? (
                        <FaChartLine />
                    ) : (
                        <FaHeartbeat />
                    )}
                </div>
                <p
                    className={`slidingText animated fadeInRight delay-${delay}`}
                >
                    {text}
                </p>
        </div>
    );
}
