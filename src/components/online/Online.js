import React from "react";
import './Online.css';

const Online = ({ user }) => {
    return (
        <li className="right-sidebar-friend">
            <div className="right-sidebar-img-container">
                <img src={user.profilePic} alt="friend" className="right-sidebar-profile-img" />
                <span className="right-sidebar-online"></span>
            </div>
            <span className="right-sidebar-username">{user.userName}</span>
        </li>
    )
}

export default Online;
