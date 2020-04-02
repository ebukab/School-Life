import React from 'react';
import "./header.styles.scss"

import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { getUser } from '../../redux/auth/auth.actions';
import Avatar from 'react-avatar';
import UserAvatar from '../userAvatar/userAvatar.component';


const Header = ({ user }) => {
    console.log("this is the user header",getUser());
    return (
        <div className="header">
            <div>
                <Link className="option" to="/">
                    Home
                </Link>
            </div>
            <div className="options">
                {!user && <Link className="option" to="/sign-up_sign-in">
                    Log In / Sign Up
                </Link>}
                {user && <Link className="option account-option" to="/account">
                    <div className="img">
                        {/* <img alt="" src="img/pic1.jpeg"/> */}
                    </div>
                    <UserAvatar
                        firstname={user.firstname}
                        lastname={user.lastname}
                        size="50"
                        style={{ marginRight: ".5rem", }}
                        img={user.image}
                    />
                    <p>{`Hello, ${user.firstname}`}</p>
                </Link>}
            </div>
        </div>
    );
}

const mapStateToProps = ({auth}) => ({
    user : auth.user
});

export default connect(mapStateToProps, {getUser})(Header);
