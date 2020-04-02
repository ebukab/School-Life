import React from 'react';
import Avatar from 'react-avatar';
import "./userAvatar.styles.scss"

const UserAvatar = ({ firstname, lastname, style, size, img}) => {
    // const img= "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
   
    return (
        <Avatar
            round={true}
            name={`${firstname} ${lastname}`}
            size={size}
            src={img ? img : ""}
            textSizeRatio={1.75} 
            style={style}
            className="imgAvatar"
            color="#C7945F"
        />
    );
}

export default UserAvatar;
