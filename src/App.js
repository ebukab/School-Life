import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import {connect} from 'react-redux'

import Header from './components/header/header.component';
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in.component';
import HomePage from './pages/homePage/homePage.component';
import AccountPage from './pages/accountPage/account.component';
import FindSchoolPage from './pages/findSchoolPage/findSchoolPage.component';
import ResetPassword from './pages/sign-up-sign-in/resetPassword/resetPassword.component';
import { app } from './firebase/firebase.utils';
import firebase from "firebase";
import { updateUser } from './redux/auth/auth.actions';

class App extends Component {
	inSubscribeFromAuth = null;
	componentDidMount() {
		this.inSubscribeFromAuth = app.auth().onAuthStateChanged((user)=>{
			if (user) {
				firebase.database().ref(`users/${user.uid}`).on('value', (data) => {
					if (data.toJSON()) {
						// return INITIAL_STATE.user = data.toJSON()
						console.log("Logged user", data.toJSON());
						return this.props.updateUser(data.toJSON())
					}
				})
			}else{
				return this.props.updateUser(null)
			}
		})
	}

	componentWillUnmount() {
		this.inSubscribeFromAuth();
	}

	render(){
		return (
			<div className="">
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/sign-up_sign-in' component={SignUpSignIn} />
					<Route exact path='/account' component={AccountPage} />
					<Route exact path='/schools' component={FindSchoolPage} />
					<Route exact path='/password-reset' component={ResetPassword} />
				</Switch>	
			</div>
		);
	}
}

const mapStateToProps = ({auth}) => ({
    displayChatWith : auth.user
});

const mapDispatchToProps = dispatch => { 
	return {
		updateUser: (user)=>dispatch(updateUser(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
