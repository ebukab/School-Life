import React from 'react';
import "./schoolItem.styles.scss"

const SchoolItem = () => {
    return (
        <div className="schoolItem">
            <div className="image">
                <img alt="" src="img/pic1.jpeg"/>
            </div>
            <div className="name">
                <span>
                Humber College Institute of Technology & Advanced Learning University of Guelph, Kemptville Campus
                </span>
            </div>
            <div className="location">
                <i className="fas fa-map-marked-alt"></i>
                <span>Canada, Ontario.</span>
            </div>
        </div>
    );
}

export default SchoolItem;
