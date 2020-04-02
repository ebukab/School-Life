import React from 'react';
import "./topSchools.styles.scss"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link } from 'react-router-dom';
import SchoolItem from '../schoolItem/schoolItem.component';

const TopSchools = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="topSchools">
            <div className="heading">
                <span className="title">Popular Schools</span>
            </div>
            <Carousel
                className="schools"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
                showDots={true}
                arrows={false}
            >
                <div className="schoolItem"><SchoolItem /></div>
                <div className="schoolItem"><SchoolItem /></div>
                <div className="schoolItem"><SchoolItem /></div>
                <div className="schoolItem"><SchoolItem /></div>
                <div className="schoolItem"><SchoolItem /></div>
                <div className="schoolItem"><SchoolItem /></div>
            </Carousel>
            <div className="footer">
                <div className="findSchool">
                    <Link className="button" to="/schools">
                        <i className="fas fa-search"></i>
                        Find Your School
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopSchools;
