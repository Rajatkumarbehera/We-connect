import { InsertEmoticonRounded, LabelRounded, PermMedia, PlaceRounded } from "@mui/icons-material";
import React from "react";
import './Share.css';

const Share = () => {
    return (
        <div className="share-container">
            <div className="share-wrapper">
                <div className="share-top">
                    <img src="assets/person/person1.jpg" alt="person" className="share-img" />
                    <input className="share-input" placeholder="What's your mind?" />
                </div>

                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia className="share-icon" style={{fontSize: "20px", color: "tomato", backgroundColor: "#ffcdbf", borderRadius: "50%", padding: "6px"}} />
                            <span className="share-text">Photo/Video</span>
                        </div>
                        <div className="share-option">
                            <LabelRounded className="share-icon" style={{fontSize: "20px", color: "blue", backgroundColor: "#add8e6", borderRadius: "50%", padding: "6px"}} />
                            <span className="share-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <PlaceRounded className="share-icon" style={{fontSize: "20px", color: "green", backgroundColor: "#98fb98", borderRadius: "50%", padding: "6px"}} />
                            <span className="share-text">Location</span>
                        </div>
                        <div className="share-option">
                            <InsertEmoticonRounded className="share-icon" style={{fontSize: "20px", color: "goldenrod", backgroundColor: "#F0E68C", borderRadius: "50%", padding: "6px"}} />
                            <span className="share-text">Feeling</span>
                        </div>
                    </div>
                    <button className="share-button">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;
