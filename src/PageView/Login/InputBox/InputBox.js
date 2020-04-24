import React from 'react';
import defaultUserImage from '../../../common/images/default-user-image.png';

export default function InputBox({ type, placeholder, onSignIn }) {

    function getUserName(value) {
        setTimeout(() => {
            localStorage.setItem('userName', value);
            localStorage.setItem('userImageUrl', defaultUserImage);
            onSignIn(value);
        }, 3000);
    }
    return (
        <div className="inputBox-content">
            <input
                type={type}
                placeholder={placeholder}
                onChange={e => getUserName(e.target.value)}
            />
        </div>
    );
}
