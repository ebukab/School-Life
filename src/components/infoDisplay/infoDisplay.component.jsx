import React from 'react';
import Chat from '../chat/chat.component';

import { connect } from "react-redux"
import {InfoDisplayContainer} from "./infoDisplay.styles" 
import HomeInfoDisplay from './home_InfoDisplay/home_InfoDisplay.component';

const InfoDisplay = ({displayChatWith}) => {
    return (
        <InfoDisplayContainer>
            {displayChatWith === "10" && <Chat />}
            <HomeInfoDisplay/>
        </InfoDisplayContainer>
    );
}

const mapStateToProps = ({account}) => ({
    displayChatWith : account.displayChatWith
});

export default connect(mapStateToProps,null)(InfoDisplay);
