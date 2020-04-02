import React, { Component } from 'react';
import "./login.styles.scss"
import FormInput from '../../../components/formInput/formInput.component';

import { Link } from 'react-router-dom';
import { app } from '../../../firebase/firebase.utils';
import { Redirect } from "react-router-dom";


class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            redirect: null,
            invalidCredentials: false
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    onLoginFormSubmit = (e) => {
        e.preventDefault();
        const {email, password } = this.state;

        app.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log("login okay");
            this.setState({
                redirect: "/account",
            })
        }).catch((err)=>{
            console.log("login un-successful");
            console.log(err)
            this.setState({
                invalidCredentials: true,
            })
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="login">
                <h1 className="title">Already have an account ?</h1>
                <p className="subHeading">Sign in with your email and password.</p>
                <form onSubmit={this.onLoginFormSubmit}>
                    <div className="form">
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required={true}
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required={true}
                        />
                        <div className="authError">
                            {this.state.invalidCredentials && <span>Please ensure your credentials are correct.</span>}
                        </div>
                        <button className="submitButton" type="submit"> Log In </button>
                        <Link className="forgotPassword" to="/password-reset">
                            <span className="">Forgot Password ?</span>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
