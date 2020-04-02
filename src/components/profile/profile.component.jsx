import React, { Component } from 'react'
import "./profile.styles.scss"
import ProfileListItem from './profileListItem/profileListItem.component'

import { connect } from "react-redux"
import { Redirect } from "react-router-dom";
import { app } from '../../firebase/firebase.utils'
import { getUser } from '../../redux/auth/auth.actions';
import UserAvatar from '../userAvatar/userAvatar.component';

class Profile extends Component {
    constructor() {
        super()

        this.state = {
            items: [
                { active: "", icon: "fas fa-home", title: "Home", },
                { active: "", icon: "fas fa-users", title: "Friends", },
                { active: "", icon: "fas fa-school", title: "Schools", },
                { active: "", icon: "fas fa-users", title: "Classrooms", },
                { active: "", icon: "fas fa-chart-pie", title: "Grade Tracker", },
            ],
            redirect: null
        }
    }

    signOut = () => { 
        // console.log("gone");
        app.auth().signOut()
        this.setState({redirect: "/"})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const { firstname, lastname, image,  } = this.props.user
        return (
            <div className="profile">
                <div className="profile-pic">
                    <UserAvatar 
                        firstname={firstname}
                        lastname={lastname}
                        size="150"
                        style={{ marginRight: ".5rem", }}
                        img={image}
                    />
                    <p className="name">{`${firstname} ${lastname}`}</p>
                </div>
                <div className="profile-list-pic">
                    <div>
                        {
                            this.state.items.map(({icon, title}) =>
                                <ProfileListItem
                                    id= {title}
                                    active={this.props.option === title ? "active" : ""}
                                    icon = {icon}
                                    title = {title}
                                    selectItem={()=>this.props.profileOption(title)}
                                />
                            )
                        }
                    </div>
                    <div>
                        <ProfileListItem signOut={this.signOut} icon="fas fa-sign-out-alt" title="Log Out"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({account,auth}) => ({
    option: account.profileSelectedOption,
    user : auth.user

});

const mapDispatchToProps = ({account}) => ({
    option: account.profileSelectedOption
});

export default connect(mapStateToProps , {getUser})(Profile)
