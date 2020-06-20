import React, { useState } from 'react'
import './Login.css'
import InputBox from './InputBox/InputBox'
import kodfit_logo from './../../common/images/kodfit_logo_large.svg'
import { Redirect } from 'react-router-dom'
import LoginLocal from './LoginButtons/LoginLocal/LoginLocal'
import LoginGoogle from './LoginButtons/LoginGoogle/LoginGoogle'
import { sendToLocalStorage } from './sendToLocalStorage'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [displayMessage, setDisplayMessage] = useState(false)

    const handleLocalLogin = () => {
        localStorage.userName = userName
        setRedirect(true)
    }

    const handleSuccess = (response) => {
        sendToLocalStorage(response)
        setRedirect(true)
    }

    const handleFailure = () => {
        setDisplayMessage(true)
    }

    return (
        <div className="Login">
            {redirect && <Redirect to="/dashboard/workouts/home" />}
            <div className="logoBox">
                <img src={kodfit_logo} className="logo" alt="logo" />
            </div>
            <main className="container">
                <div className="inputBox">
                    <InputBox
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <InputBox type="password" placeholder="Password" />
                </div>
                <LoginLocal onClick={userName ? handleLocalLogin : null} />
                <p className="subtext">OR</p>
                <LoginGoogle
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                />
                {displayMessage && (
                    <p className="error-message">
                        Google Login is currently unavailable. Please enter a
                        Username and click SIGN IN
                    </p>
                )}
            </main>
        </div>
    )
}
