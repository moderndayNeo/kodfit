import React, { useState } from 'react';
import './Login.css';
import InputBox from './InputBox/InputBox';
import kodfit_logo from './../../common/images/kodfit_logo_large.svg';
import { Redirect } from 'react-router-dom';
import LoginButtons from './LoginButtons/LoginButtons';

export default function Login() {

    const [userName, setUserName] = useState('')

    function handleUserName(value) {
        setUserName(value)
    }

    return (
        <div className="Login">
            {userName && <Redirect to ='/dashboard/workouts/home' />}
            <div className="logoBox">
                <img src={kodfit_logo} className="logo" alt="logo" />
            </div>
            <main className="container">
                <div className="inputBox">
                    <InputBox type="text" placeholder="Username" onSignIn={handleUserName}/>
                    <InputBox type="password" placeholder="Password" />
                </div>
                <LoginButtons onSignIn={handleUserName}/>
            </main>
        </div>
    )
}
