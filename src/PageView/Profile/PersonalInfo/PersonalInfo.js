import React from 'react'

export default function PersonalInfo() {
    return (
        <div className="PersonalInfo">
            <div className="personalInfo-content">
                <span>weight</span>
                <span className="text-bold">78kg</span>
            </div>
            <div className="personalInfo-content">
                <span>height</span>
                <span className="text-bold">180 cm</span>
            </div>
            <div className="personalInfo-content">
                <span>bmi</span>
                <span className="text-bold">20</span>
            </div>
            <div className="personalInfo-content">
                <span>sex</span>
                <span className="text-bold">M</span>
            </div>
        </div>
    )
}
