import React, { Component } from 'react';
import "./signUp.styles.scss"
import FormInput from '../../../components/formInput/formInput.component';

import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { signUp } from '../../../redux/auth/auth.actions';
import { app } from '../../../firebase/firebase.utils';
import firebase from "firebase";

//Password Validation rules
var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


class SignUp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordReEntered: "",
            school: "",
            passwordsMatch: true,
            passwordSatisfyRules: true,
            emailAlreadyExist: false,
            couldNotSignUp: false,
            redirect: null
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;
        if (value !== " ") {
            this.setState({[name]: value})
        }
    }

    handleSubmit = async event => { 
        event.preventDefault();
        const { firstName, lastName, email, password, passwordReEntered, school } = this.state;
        
        if (password !== passwordReEntered) {
            return this.setState({
                passwordsMatch: false,
            });
        } else { 
            if (schema.validate(password)) {
                app.auth().createUserWithEmailAndPassword(email, password)
                .then((u) => {
                    firebase.database().ref(`users/${u.user.uid}`).set({
                        email : email,
                        firstname : firstName,
                        lastname : lastName,
                        school: school,
                        date: new Date(),
                        uid : u.user.uid
        
                    }).then(()=>{
                        this.setState({
                            redirect: "/account"
                        })
                    }).catch((err)=>{
                        console.log(err)
                    })
                // console.log("SignUp successful");
                // console.log(u);/account
                }).catch((err) => {
                    if (err.code === "auth/email-already-in-use") {
                        return this.setState({
                            emailAlreadyExist: true,
                        });
                    } else { 
                        return this.setState({
                            couldNotSignUp: true,
                        });
                    }
                })
            } else { 
                this.setState({
                    passwordSatisfyRules: false,
                })
            }
        }
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="signUp">
                <h1 className="title">You don't have an account ?</h1>
                <p className="subHeading">
                    By Signing up , you can join classroom chats , connect with people , and find friends!.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <div className="sideBySide">
                            <FormInput
                                label="First Name"
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                required={true}
                            />
                            <FormInput
                                label="Last Name"
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                required={true}
                            />
                        </div>
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required={true}
                        />
                        <div className="authError">
                            {this.state.emailAlreadyExist && <span>An account already exist with this email. Please sign-in instead</span>}
                        </div>
                        <div className="sideBySide">
                            <FormInput
                                label="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required={true}
                            />
                            <FormInput
                                label="Re-enter Password"
                                type="password"
                                name="passwordReEntered"
                                value={this.state.passwordReEntered}
                                onChange={this.handleChange}
                                required={true}
                            />
                        </div>
                        <div className="authError">
                            {!this.state.passwordsMatch && <span>Passwords do not match</span>}
                            {!this.state.passwordSatisfyRules && <span>Passwords do not meet the requirements</span>}
                        </div>
                        <div className="sideBySidePasswordRules">
                            <span className="rule"><span className="bullet">&#8226;</span>Must be at least 8 characters</span>
                            <span className="rule"><span className="bullet">&#8226;</span>Must have at least 1 uppercase letter</span>
                            <span className="rule"><span className="bullet">&#8226;</span>Must have at least 1 lowercase letter</span>
                            <span className="rule"><span className="bullet">&#8226;</span>Must have at least 1 digit</span>
                        </div>
                        <FormInput
                            label="Your School ( Optional )"
                            type="text"
                            name="school"
                            value={this.state.school}
                            onChange={this.handleChange}
                            required={false}
                        />
                        <div className="passwordError">
                            {!this.state.passwordsMatch && <span>Could not sign up</span>}
                            {!this.state.passwordSatisfyRules && <span>Passwords do not meet the requirements</span>}
                        </div>
                        <div className="authError">
                            {this.state.couldNotSignUp && <span>Could not sign up.</span>}
                        </div>
                        <button className="submitButton" type="submit"> Sign Up </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    option: auth.user
});

export default connect(mapStateToProps, {signUp,})(SignUp);