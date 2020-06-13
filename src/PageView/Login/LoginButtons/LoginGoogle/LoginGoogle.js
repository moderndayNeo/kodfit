import React from 'react';
import GoogleLogin from 'react-google-login';
import './LoginGoogle.css';
// const API_clientID = `${process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}`
const API_clientID = "1097196745693-rvdjo1eanv2cgsjldi7b9vs71t52tvuk.apps.googleusercontent.com"
/*
REACT_APP_NEW_LOGIN_ID = "1097196745693-rvdjo1eanv2cgsjldi7b9vs71t52tvuk.apps.googleusercontent.com"
REACT_APP_OLD_LOGIN_ID = "1097196745693-qh7n4kj5j6hc5nsrrhgdak0dm5kav4pb.apps.googleusercontent.com"
*/

export default function LoginGoogle({ onSuccess, onFailure }) {
    return (
        <GoogleLogin
            clientId= {API_clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            // render={(renderProps) => (
            //     <button
            //         onClick={onClick}
            //         className="button btn-transparent rounded-capsule LoginGoogle"
            //     >
            //         Sign in with Google
            //     </button>
            // )}
        />
    );
}
