import { Bookmark, Chat, Code, Description, Event, ExitToApp, Group, Help, InsertPhoto, Layers, PlayCircle, RssFeed, School, Settings, Work } from "@mui/icons-material";
import React from "react";
import { Users } from "../../data";
import Friend from "../friend/Friend";
// import './LeftSidebar.css';
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            {/* <div className="left-sidebar-wrapper">
                <ul className="left-sidebar-list">
                    <Link to="/feed" style={{textDecoration: "none"}}>
                        <li className="left-sidebar-item">
                            <RssFeed className="left-sidebar-icon" style={{color: "#2563EB"}} />
                            <span className="left-sidebar-text">feed</span>
                        </li>
                    </Link>
                    <li className="left-sidebar-item">
                        <Chat className="left-sidebar-icon" style={{color: "#10B981"}} />
                        <span className="left-sidebar-text">chats</span>
                    </li>
                    <li className="left-sidebar-item">
                        <PlayCircle className="left-sidebar-icon" style={{color: "#EF4444"}}/>
                        <span className="left-sidebar-text">videos</span>
                    </li>
                    <li className="left-sidebar-item">
                        <Group className="left-sidebar-icon" style={{color: "#3B82F6"}} />
                        <span className="left-sidebar-text">groups</span>
                    </li>
                    <li className="left-sidebar-item">
                        <Bookmark className="left-sidebar-icon" style={{color: "#2563EB"}} />
                        <span className="left-sidebar-text">bookmarks</span>
                    </li>
                    <li className="left-sidebar-item">
                        <Help className="left-sidebar-icon" style={{color: "#F59E0B"}} />
                        <span className="left-sidebar-text">questions</span>
                    </li>
                    <li className="left-sidebar-item">
                        <Work className="left-sidebar-icon" style={{color: "#EC4899"}} />
                        <span className="left-sidebar-text">jobs</span>
                    </li>
                    <li className="left-sidebar-item">
                        <Event className="left-sidebar-icon" style={{color: "#F59E0B"}} />
                        <span className="left-sidebar-text">events</span>
                    </li>
                    <li className="left-sidebar-item">
                        <School className="left-sidebar-icon" style={{color: "#6366F1"}} />
                        <span className="left-sidebar-text">courses</span>
                    </li>
                    <li className="left-sidebar-item">
                        <InsertPhoto className="left-sidebar-icon" style={{color: "#EF4444"}} />
                        <span className="left-sidebar-text">photos</span>
                    </li>
                </ul>

                <hr className="line" />
                <h3 className="heading">Contacts</h3>
                <ul className="friend-list">
                    {Users.map((u) => (
                        <Friend key={u.id} user={u} />
                    ))}
                </ul>

                <hr className="line" />
                <h3 className="pages">Pages</h3>
                <ul className="pages-list">
                    <li className="pages-item">
                        <Settings className="pages-icon" />
                        <span className="pages-text">Setting</span>
                    </li>
                    <li className="pages-item">
                        <Layers className="pages-icon" />
                        <span className="pages-text">Info Pages</span>
                    </li>
                    <li className="pages-item">
                        <Description className="pages-icon" />
                        <span className="pages-text">Create Content</span>
                    </li>
                    <li className="pages-item">
                        <Code className="pages-icon" />
                        <span className="pages-text">Development</span>
                    </li>
                    <li className="pages-item">
                        <ExitToApp className="pages-icon" />
                        <span className="pages-text">Authentication</span>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default LeftSidebar;
