import React from 'react';
import "./header.styles.scss"

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div>

            </div>
            <div className="options">
                <Link className="option" to="/sign-up_sign-in">
                    LOG IN / SIGN UP
                </Link>
                <Link className="option account-option" to="/account">
                    <div className="img">
                        <img alt="" src="img/pic.jpg"/>
                    </div>
                    <p>Beluolisa</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
