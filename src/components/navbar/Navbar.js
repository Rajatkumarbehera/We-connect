import { Chat, Groups, Notifications, Person, Search } from "@mui/icons-material";
import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="left-navbar">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="navbar-logo">
                        <Groups style={{fontSize: "32px", marginRight: "5px"}} />
                        We.Connect
                    </span>
                </Link>
            </div>
            <div className="center-navbar">
                <div className="searchbar">
                    <Search className="searchbar-icon" />
                    <input type="search" className="searchbar-input" placeholder="Search for Friends, Videos and more..." />
                </div>
            </div>
            <div className="right-navbar">
                <div className="navbar-icons">
                    <div className="navbar-icon">
                        <Person />
                        <span className="navbar-badge">10</span>
                    </div>
                    <div className="navbar-icon">
                        <Chat />
                        <span className="navbar-badge">5</span>
                    </div>
                    <div className="navbar-icon">
                        <Notifications />
                        <span className="navbar-badge">3</span>
                    </div>

                    <Link to="/login" style={{textDecoration: "none"}}>
                        <div className="navbar-icon">Login</div>
                    </Link>

                    <Link to="/register" style={{textDecoration: "none"}}>
                        <div className="navbar-icon">Register</div>
                    </Link>
                </div>

                <Link to="/profile" style={{textDecoration: "none"}}>
                    <img src="assets/person/person1.jpg" alt="person" className="navbar-profile" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
