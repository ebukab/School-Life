import React, { Component } from 'react';
import { PostContainer, PostHeader, PostText, PostMultiMedia, PostComment } from './post.styles';
import SearchBar from '../searchBar/searchBar.component';

class Post extends Component {
    constructor() { 
        super()

        this.state = {
            comment: "",
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        alert(this.state.comment)
    }

    render(){
        return (
            <PostContainer>
                <PostHeader>
                    <div className="img">
                        <img alt="" src="img/pic1.jpeg"/>
                    </div>
                    <div>
                        <span>Markey Stibins</span><br/>
                        <span className="timeStamp">Tue Jan 20, 6:45pm</span>
                    </div>
                </PostHeader>
                <PostText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </PostText>
                <div>
                    <SearchBar 
                        handleChange={this.handleChange}
                        name="comment"
                        placeholder="Leave a comment ..."
                        value={this.state.comment}
                        icon="fas fa-paper-plane"
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            </PostContainer>
        );
    }
}


export default Post;
