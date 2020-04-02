import React from 'react';
import "./friendsDetails.styles.scss"

import SearchBar from '../../../searchBar/searchBar.component';
import UserItem from '../../../userItem/userItem.component';

const FriendsDetails= ({chatToDisplay}) => {
    return (
        <div className="friendDetails">
            <div className="searchBox">
                <SearchBar placeholder="Enter search here" icon="fas fa-search"/>
            </div>
            <div className="info">
                <UserItem chatToDisplay={chatToDisplay} temp="10"/>
                <UserItem temp="10"/>
                <UserItem temp="10"/>
                <UserItem temp="1"/>
                <UserItem temp="10"/>
                <UserItem temp="10"/>
                <UserItem temp="1"/>
                <UserItem temp="1"/>
                <UserItem temp="1"/>
            </div>
        </div>
    );
}

export default FriendsDetails;
