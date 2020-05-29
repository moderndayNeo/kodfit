import React from 'react';
import GoogleLogin from 'react-google-login';
import './LoginGoogle.css';
const API_clientID = `${process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}`

export default function LoginGoogle({ onClick, onSuccess, onFailure }) {

    console.log(API_clientID)
    return (
        <GoogleLogin
            clientId={API_clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            render={(renderProps) => (
                <button
                    onClick={onClick}
                    className="button btn-transparent rounded-capsule LoginGoogle"
                >
                    Sign in with Google
                </button>
            )}
        />
    );
}
