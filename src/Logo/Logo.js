import React from 'react';
import './Logo.css';
import logo from '../common/images/kodfit_logo_small.svg';

export default function Logo() {
    return (
        <img src={logo} className="logo" alt="logo" />
    );
 
}
