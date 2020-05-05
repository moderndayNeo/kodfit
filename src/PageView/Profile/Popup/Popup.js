import React, { useState } from 'react';
import './Popup.css';
import InputField from './InputField/InputField';
import {
    setAge,
    setCurrentWeight,
    setHeight,
    setGoalWeight,
    setSex,
} from './updateSettings';
import './UpdateButton/UpdateButton';
import UpdateButton from './UpdateButton/UpdateButton';

export default function Popup({ onClick }) {
    let [gender, setGender] = useState('M');

    const handleChange = (sex) => {
        setGender(sex);
        setSex(sex);
    };

    console.log(localStorage);

    return (
        <div className="Popup">
            <div className="popup-box">
                <h2 className="header">Update Your Stats</h2>
                <div className="centre-text">
                    <InputField
                        title="Age"
                        type="number"
                        placeholder={localStorage.age ? localStorage.age : '--'}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <InputField
                        title="Height (cm)"
                        type="number"
                        placeholder={
                            localStorage.height ? localStorage.height : '--'
                        }
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <InputField
                        title="Current Weight (kg)"
                        type="number"
                        placeholder={
                            localStorage.currentWeight
                                ? localStorage.currentWeight
                                : '--'
                        }
                        onChange={(e) => setCurrentWeight(e.target.value)}
                    />
                    <InputField
                        title="Goal Weight (kg)"
                        type="number"
                        placeholder={
                            localStorage.goalWeight
                                ? localStorage.goalWeight
                                : '--'
                        }
                        onChange={(e) => setGoalWeight(e.target.value)}
                    />

                    <select
                        value={gender}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <UpdateButton onClick={onClick} />
            </div>
        </div>
    );
}
