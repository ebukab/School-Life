import React, { Component } from 'react';
import "./account.styles.scss"
import Profile from '../../components/profile/profile.component';
import InfoDisplay from '../../components/infoDisplay/infoDisplay.component';
import ProfileDetails from '../../components/profile/profileDetails/profileDetails.component';

import {connect} from "react-redux"

class AccountPage extends Component{

    render() {
        return (
            <div className="account">
                <div className="tab_1">
                    <Profile />
                </div>
                <div className="tab_2">
                    <ProfileDetails  />
                </div>
                <div className="tab_3">
                    <InfoDisplay />
                </div>
            </div>
        );
    }
}

export default connect()(AccountPage);
