import React from 'react'
import GoogleLogin from 'react-google-login'
import './LoginGoogle.css'
// const API_clientID = `${process.env.REACT_APP_NEW_LOGIN_ID}`
const API_clientID =
    '1097196745693-rvdjo1eanv2cgsjldi7b9vs71t52tvuk.apps.googleusercontent.com'

export default function LoginGoogle({ onSuccess, onFailure }) {
    return (
        <GoogleLogin
            // clientId={API_clientID}
            clientId={'false id'}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            render={(renderProps) => (
                <button
                    onClick={renderProps.onClick}
                    className="button btn-transparent rounded-capsule LoginGoogle"
                >
                    Sign in with Google
                </button>
            )}
        />
    )
}
