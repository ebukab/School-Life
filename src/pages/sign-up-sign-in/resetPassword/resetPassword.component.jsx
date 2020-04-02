import React, { Component } from 'react'
import "./resetPassword.styles.scss"

import FormInput from '../../../components/formInput/formInput.component';
import { app } from '../../../firebase/firebase.utils';

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            passwordResetError: false,
            resetEmailSent: false
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    onForgotPasswordFormSubmit = (e) => {
        e.preventDefault();

        app.auth().sendPasswordResetEmail(this.state.email)
            .then((u) => {
                this.setState({resetEmailSent: true,email: "", });
            }).catch((error) => {
                console.log(error)
                this.setState({
                    passwordResetError : true,
                    email: "",
                })
            });
    }

    render() {
        return (
            <div className="resetPasswordBox">
                <div className="resetPassword">
                    <h1 className="title">Forgot password ?</h1>
                    <p className="subHeading">
                        A link will be sent to your email to help you reset your password.
                    </p>
                    <form onSubmit={this.onForgotPasswordFormSubmit}>
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required={true}
                        /> 
                        <div className="authError">
                            {this.state.passwordResetError && <span>There is no account with this email.</span>}
                        </div>
                        <div className="resetEmailSent">
                            {this.state.resetEmailSent && <span>An link to reset your password have been sent to your email.</span>}
                        </div>
                        <button className="submitButton" type="submit"> Send </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ResetPassword;


