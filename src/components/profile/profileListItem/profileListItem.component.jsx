import React from 'react'
import "./profileListItem.styles.scss"

import { connect } from "react-redux"
import { updateProfileOption } from '../../../redux/account/account.actions'

// onClick={()=>selectItem(title)}

function ProfileListItem({ icon, title, active, selectItem, updateProfileOption, signOut }) {
    const handleClick = () => { 
        if (title === "Log Out") { 
            return signOut()
        }
        return updateProfileOption(title)
    }
    return (
        <div className={`item ${active}`} onClick={handleClick}>
            <div className="icon">
                <i className={icon}></i>
            </div>
            <p className="title">{title}</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateProfileOption: (title) => dispatch(updateProfileOption(title))
})

export default connect(null, mapDispatchToProps)(ProfileListItem)
