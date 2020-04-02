import React from 'react';
import "./message.styles.scss"

const Message = ({ userMessage, message }) => {
    return (
        <div className={userMessage ? "floatRight message" : " message"}>
                <div className={userMessage ? "hide img" : " img"}>
                    <img alt="" src="img/pic1.jpeg"/>
                </div>
                <div className="messageBox">
                    <span className={userMessage ? "hide name" : " name"}>Mark Sterling</span>
                    <div className={userMessage ? "userMessage box" : "notUserMessage box"}>
                        {message}
                    </div>
                </div>    
        </div>
    );
}

export default Message;
