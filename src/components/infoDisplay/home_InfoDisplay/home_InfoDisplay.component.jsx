import React from 'react';
import { HomeInfoDisplayContainer } from './home_InfoDisplay.styles';
import Post from '../../post/post.component';

const HomeInfoDisplay = () => {
    return (
        <HomeInfoDisplayContainer>
            <Post/>
        </HomeInfoDisplayContainer>
    );
}

export default HomeInfoDisplay;
