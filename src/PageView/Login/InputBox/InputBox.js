import React from 'react';
// import defaultUserImage from '../../../common/images/default-user-image.png';

export default function InputBox({ type, placeholder }) {

    return (
        <div className="inputBox-content">
            <input
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}
