import React, { useState, useEffect } from 'react';
import './PopupButton.css';

export default function PopupButton({ onClick, infoProvided }) {
    const [animated, setAnimated] = useState(true)

    // useEffect(() => {
    //     setInterval(() => {
    //         if (infoProvided === false) {
    //             setAnimated(true)
    //         }
    //     }, 3000);
    //     setTimeout(() => {
    //         setAnimated(false)
    //     }, 1000);
    // }, [infoProvided])

    return (
        <button
            className={`PopupButton button primary rounded-capsule update-stats ${animated && "call-user-attention"}`}
            onClick={onClick}
        >
            Update your stats
        </button>
    );
}
