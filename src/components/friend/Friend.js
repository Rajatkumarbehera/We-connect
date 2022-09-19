import React from "react";
import './Friend.css';

const Friend = ( { user } ) => {
    return (
        <li className="friend-container">
            <img src={user.profilePic} alt="friend" className="friend-img" />
            <span className="friend-name">{user.userName}</span>
        </li>
    )
}

export default Friend;
