import React, { useState } from 'react';
import './SelectGender.css';
import { setSex } from '../updateSettings';

export default function SelectGender() {
    let [sexDisplayed, setSexDisplayed] = useState('M');

    const handleChange = (sex) => {
        setSexDisplayed(sex);
        setSex(sex);
    };

    return (
        <select
            className="SelectGender"
            value={sexDisplayed}
            onChange={(e) => handleChange(e.target.value)}
        >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="Other">Other</option>
        </select>
    );
}
