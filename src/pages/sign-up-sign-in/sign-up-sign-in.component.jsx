import React from 'react';
import "./sign-up-sign-in.styles.scss"

import Login from './login/login.component';
import SignUp from './signUp/signUp.component';

const SignUpSignIn = () => {
    return (
        <div className="sign-up_sign-in">
            <div className="loginSide">
                <Login/>
            </div>
            <div className="signUpSide">
                <SignUp/>
            </div>
        </div>
    );
}

export default SignUpSignIn;
