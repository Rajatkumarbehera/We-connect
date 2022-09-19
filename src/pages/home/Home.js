import React from "react";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import RightSidebar from "../../components/rightsidebar/RightSidebar";
import './Home.css';

const Home = () => {
    return (
            <div>
                <Navbar />

                <div className="home-container">
                    <LeftSidebar />
                    <Feed />
                    <RightSidebar />
                </div>
            </div>
    )
}

export default Home;
