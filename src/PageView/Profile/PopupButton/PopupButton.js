import React, { useState, useEffect } from 'react';
import './PopupButton.css';

export default function PopupButton({ onClick, infoProvided }) {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setInterval(() => {
            if (infoProvided === false) {
                setAnimated(true)
            }
        }, 3000);
        setTimeout(() => {
            setAnimated(false)
        }, 1000);
    }, [infoProvided])

    return (
        <button
            className={`PopupButton button primary rounded-capsule update-stats ${animated && "bouncing"}`}
            onClick={onClick}
        >
            Update your stats
        </button>
    );
}
