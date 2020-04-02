import React from 'react';
import "./homePage.styles.scss"

import TopSchools from '../../components/topSchools/topSchools.component';

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-top_school">
                <TopSchools/>
            </div>
        </div>
    );
}

export default HomePage;
