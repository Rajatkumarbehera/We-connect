import Feed from "../../components/feed/Feed";
import React from "react";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import Navbar from "../../components/navbar/Navbar";
import RightSidebar from "../../components/rightsidebar/RightSidebar";
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <Navbar />

            <div className="profile-container">
                <LeftSidebar />
                <div className="profile">
                    <div className="profile-top">
                        <div className="profile-cover">
                            <img src="assets/post/post1.jpg" alt="post" className="profile-cover-img" />
                            <img src="assets/person/person1.jpg" alt="person" className="profile-user-img" />
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">Andrea</h4>
                            <span className="profile-info-desc">I am a Developer 🧡💚💙</span>
                        </div>
                    </div>
                    <div className="profile-bottom">   
                        <Feed />
                        <RightSidebar Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
