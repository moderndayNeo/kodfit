import React from 'react';
import GoogleLogin from 'react-google-login';
import './LoginGoogle.css'

export default function LoginGoogle({ onClick }) {

    // const responseGoogle = response => {
    //     localStorage.setItem('userName', response.profileObj.name);
    //     localStorage.setItem('userImageUrl', response.profileObj.imageUrl);
    //     const userName = localStorage.getItem('userName')
    // }

    return (
            <GoogleLogin
                clientId="848040990578-mpvcvg31e99180qb7f28rqvfm708iqp3.apps.googleusercontent.com"
                // onSuccess={responseGoogle} //
                // onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="button btn-transparent rounded-capsule btn-google">
                            Sign in with Google
                    </button>
                )}
            />
    )
}
