import React from 'react';
import "./userItem.styles.scss"

import { connect } from "react-redux"
import { chatToDisplay } from '../../redux/account/account.actions';

function UserItem({chatToDisplay, temp}) {
    return (
        <div className="userItem" onClick={()=>chatToDisplay(temp)}>
            <div className="img">
                <img alt="" src="img/pic1.jpeg"/>
            </div>
            <div>
                <p className="title">Mark Sterling</p>
                <p className="subTitle">Hey this is a random test message , please ignore it haha ... </p>
            </div>
        </div>
    )
}

export default connect(null , {chatToDisplay})(UserItem)
