import React from 'react';
import "./profileDetails.styles.scss"
import FriendsDetails from './friendsDetails/friendsDetails.component';

import { connect } from "react-redux"


const ProfileDetails = ({ option,chatToDisplay }) => {
    return (
        <div className="profileDetails">
            {option === "Friends" && <FriendsDetails chatToDisplay={chatToDisplay} />}
            {option === "Home" && "Home"}
            {option === "Grade Tracker" && "Grade Tracker"}
            {option === "Classrooms" && "Classrooms"}
            {option === "Schools" && "Schools"}
        </div>
    );
}

const mapStateToProps = ({account}) => ({
    option: account.profileSelectedOption
});

export default connect(mapStateToProps , {})(ProfileDetails);
