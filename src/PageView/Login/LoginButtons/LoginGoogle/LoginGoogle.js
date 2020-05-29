import React from 'react';
import GoogleLogin from 'react-google-login';
import './LoginGoogle.css';

export default function LoginGoogle({ onClick, onSuccess, onFailure }) {
    return (
        <GoogleLogin
            clientId="848040990578-mpvcvg31e99180qb7f28rqvfm708iqp3.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            render={(renderProps) => (
                <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="button btn-transparent rounded-capsule LoginGoogle"
                >
                    Sign in with Google
                </button>
            )}
        />
    );
}
