import { DeleteForever, Edit, MoreHoriz, Share, SpeakerNotesOff, StarBorder } from "@mui/icons-material";
import React, { useState } from "react";
import './More.css';

const More = () => {
    const [more, setMore] = useState(false);

    return (
        <>
            <MoreHoriz className="horizontal-dot" onClick={() => setMore(!more)} />
            {more && (
                <div className="more-container">
                    <div className="more-item">
                        <Share style={{fontSize: "20px", marginRight: "5px"}}/>
                        <span className="more-text">Share</span>
                    </div>
                    <div className="more-item">
                        <Edit style={{fontSize: "20px", marginRight: "5px"}} />
                        <span className="more-text">Edit post</span>
                    </div>
                    <div className="more-item">
                        <SpeakerNotesOff style={{fontSize: "20px", marginRight: "5px"}} />
                        <span className="more-text">Disable comment</span>
                    </div>
                    <div className="more-item">
                        <StarBorder style={{fontSize: "20px", marginRight: "5px"}} />
                        <span className="more-text">Add favorite</span>
                    </div>
                    <hr />
                    <div className="more-item">
                        <DeleteForever style={{fontSize: "20px", marginRight: "5px", color: "red"}} />
                        <span className="more-text" style={{color: "red"}}>Delete</span>
                    </div>
                </div>            
            )}
        </>
    )
}

export default More;
