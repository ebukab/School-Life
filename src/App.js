import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SignUpSignIn from './pages/sign-up-sign-in/sign-up-sign-in.component';
import HomePage from './pages/homePage/homePage.component';
import AccountPage from './pages/accountPage/account.component';

class App extends Component {
	render(){
		return (
			<div className="">
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/sign-up_sign-in' component={SignUpSignIn} />
					<Route exact path='/account' component={AccountPage} />
				</Switch>	
			</div>
		);
	}
}

export default App;
