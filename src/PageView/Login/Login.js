import React, { useState } from 'react'
import './Login.css'
import InputBox from './InputBox/InputBox'
import kodfit_logo from './../../common/images/kodfit_logo_large.svg'
import { Redirect } from 'react-router-dom'
import LoginLocal from './LoginButtons/LoginLocal/LoginLocal'
import LoginGoogle from './LoginButtons/LoginGoogle/LoginGoogle'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [clicked, setClicked] = useState(false)

    const handleLocalLogin = () => {
        localStorage.userName = userName
        setClicked(!clicked)
    }

    const responseGoogle = (response) => {
        const googeleName = response.profileObj.name
        localStorage.setItem('userName', googeleName)
        localStorage.setItem('userImageUrl', response.profileObj.imageUrl)
        setUserName(googeleName)
        // setClicked(!clicked);
    }

    const handleFailure = (response) => {
        console.log('Google Login Failed')
        // setClicked(!clicked)
    }

    return (
        <div className="Login">
            {clicked && <Redirect to="/dashboard/workouts/home" />}
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
                <LoginLocal onClick={ userName ? handleLocalLogin : null } />
                <p className="subtext">OR</p>
                <LoginGoogle
                    // onClick={handleSubmit}
                    onSuccess={responseGoogle}
                    onFailure={handleFailure}
                />
            </main>
        </div>
    )
}
