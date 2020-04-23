import React from 'react';
import GoogleLogin from 'react-google-login';

export default function LoginButtons(props) {

    const responseGoogle = response => {
        localStorage.setItem('userName', response.profileObj.name);
        localStorage.setItem('userImageUrl', response.profileObj.imageUrl);
        const userName = localStorage.getItem('userName')
        props.onSignIn(userName);
    }

    return (
        <div className="LoginButtons">
            <button className="button primary rounded-capsule signInButton">Sign In</button>
            <span>or</span>
            <GoogleLogin
                clientId="848040990578-mpvcvg31e99180qb7f28rqvfm708iqp3.apps.googleusercontent.com"
                render={renderProps => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="button btn-transparent rounded-capsule btn-google">
                            Sign in with Google
                    </button>
                )}
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
