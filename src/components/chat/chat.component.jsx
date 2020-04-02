import React, { Component } from 'react'
import "./chat.styles.scss"
import SearchBar from '../searchBar/searchBar.component';
import Message from '../message/message.component';

class Chat extends Component {
    constructor(props){ 
        super()

        this.state = {
        };
    }
    render() {
        const message1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        const message2 = "This is a random test message please ignore it ..."

        return (
            <div className="chat">
                <div className="messages">
                    <Message userMessage={true} message={message1}/>
                    <Message userMessage={false} message={message2} />
                    <Message userMessage={true} message={message1}/>
                    <Message userMessage={false} message={message2} />
                    <Message userMessage={true} message={message1}/>
                    <Message userMessage={false} message={message2} />
                    <Message userMessage={true} message={message1}/>
                    <Message userMessage = {false} message={message2}/>
                </div>

                <div className="input">
                    <SearchBar placeholder="Enter message here ..." icon="fas fa-paper-plane"/>
                </div>
            </div>
        )
    }
}

export default Chat
