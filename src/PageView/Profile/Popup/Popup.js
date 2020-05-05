import React from 'react';
import './Popup.css';
import InputField from './InputField/InputField';
import {
    setAge,
    setCurrentWeight,
    setHeight,
    setGoalWeight,
} from './updateSettings';
import './UpdateButton/UpdateButton';
import UpdateButton from './UpdateButton/UpdateButton';
import './SelectGender/SelectGender';
import SelectGender from './SelectGender/SelectGender';

export default function Popup({ onClick }) {
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
                    <SelectGender />
                </div>
                <UpdateButton onClick={onClick} />
            </div>
        </div>
    );
}
