import React from 'react';
import GoogleLogin from 'react-google-login';
import './LoginGoogle.css';

export default function LoginGoogle({ onClick, onSuccess, onFailure }) {
    return (
        <GoogleLogin
            clientId="1097196745693-qh7n4kj5j6hc5nsrrhgdak0dm5kav4pb.apps.googleusercontent.com"
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
