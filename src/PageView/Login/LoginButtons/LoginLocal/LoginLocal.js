import React from 'react';
import './LoginLocal.css';

export default function LoginLocal({ onClick }) {
    return (
        <button
            className="LoginLocal button primary rounded-capsule signInButton"
            onClick={onClick}
        >
            Sign In
        </button>
    );
}
