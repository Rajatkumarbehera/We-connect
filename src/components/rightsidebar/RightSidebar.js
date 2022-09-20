import React from "react";
import { Users } from "../../data";
import Online from "../online/Online";
// import './RightSidebar.css';

const RightSidebar = ( { Profile }) => {
    const HomeRightSidebar = () => {
        return (
            <>
                {/* <div className="birthday-container">
                    <img src="assets/gift.png" alt="gift" className="birthday-img" />
                    <span className="birthday-text">
                        <strong>Rohan</strong> and <strong>5 others</strong> have a birthday today.
                    </span>
                </div>
                
                <img src="assets/advertise.jpg" alt="ads" className="right-sidebar-ad" />
                <h3 className="right-sidebar-title">
                    Friends
                    <span className="friend-count-badge">{Users.length}</span>    
                </h3>
                <ul className="right-sidebar-friend-list">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul> */}
            </>
        )
    }

    const ProfileRightSidebar = () => {
        return (
            <>
                <div className="info-container">
                    <div className="info-wrapper">
                        <h4 className="info-title">About</h4>
                        <div className="info-list">
                            <div className="info-item">
                                <span className="info-key">City :</span>
                                <span className="info-value">New York</span>
                            </div>
                            <div className="info-item">
                                <span className="info-key">From :</span>
                                <span className="info-value">Madrid</span>
                            </div>
                            <div className="info-item">
                                <span className="info-key">Relationship :</span>
                                <span className="info-value">Single</span>
                            </div>
                        </div>
                        <h4 className="info-title">Friends</h4>
                        <div className="friends-list">
                            <div className="friend">
                                <img src="assets/person/person1.jpg" alt="person" className="follower-img" />
                                <span className="follower-name">Andrea</span>
                            </div>
                            <div className="friend">
                                <img src="assets/person/person2.jpg" alt="person" className="follower-img" />
                                <span className="follower-name">Daniel</span>
                            </div>
                            <div className="friend">
                                <img src="assets/person/person3.jpg" alt="person" className="follower-img" />
                                <span className="follower-name">Fernanda</span>
                            </div>
                            <div className="friend">
                                <img src="assets/person/person4.jpg" alt="person" className="follower-img" />
                                <span className="follower-name">Hasibul</span>
                            </div>
                            <div className="friend">
                                <img src="assets/person/person5.jpg" alt="person" className="follower-img" />
                                <span className="follower-name">Simon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="right-sidebar-container">
            <div className="right-sidebar-wrapper">
                {Profile ? <ProfileRightSidebar /> : <HomeRightSidebar />}
            </div>
        </div>
    )
}

export default RightSidebar;
