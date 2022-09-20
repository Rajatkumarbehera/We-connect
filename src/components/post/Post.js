import { Comment, Public, Share, ThumbUpOffAlt } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Users } from "../../data";
import Loader from "../loader/Loader";
import More from "../more/More";
import './Post.css';

const Post = ( { post } ) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const likeHandle = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePic} alt="person" className="post-profile-img" />
                        <span className="post-user-name">
                            {Users.filter((u) => u.id === post?.userId)[0].userName}
                        </span>
                        <span className="top-left-dot">&#8231;</span>
                        <span className="post-date">{post.date}</span>
                        <span className="top-right-dot">&#8231;</span>
                        <Public style={{fontSize: "15px"}} />
                    </div>
                    <div className="post-top-right">
                        <More />                        
                    </div>
                </div>
                <div className="post-center">
                    {isLoading ? <Loader /> : 
                        <>
                            <span className="post-text">{post?.description}</span>
                            <img src={post.image} alt="post" className="post-img" />
                        </>
                    }
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="assets/like.png" alt="like" className="post-like-icon icon1" />
                        <img src="assets/love.png" alt="love" className="post-like-icon icon2" />
                        <img src="assets/smile.png" alt="smile" className="post-like-icon icon3" />
                        <span className="like-counter">{like} and others</span>
                    </div>
                    
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                        <span className="bottom-right-dot">&#8231;</span>
                        <span className="post-share-text">{post.share} shares</span>
                    </div>
                </div>

                <hr style={{border: 0, height: "0.5px", width: "99.5%", background: "#ccc", margin: "-7px 3px 10px"}} />

                <div className="post-bottom-last">
                    <div className="post-bottom-last-left" onClick={likeHandle}>
                        <ThumbUpOffAlt className="left-like-icon" style={isLiked ? {backgroundColor: "blue", color: "white", fontSize: "20px"} : {backgroundColor: "#F3F4F6", color: "black", fontSize: "20px"}} />
                        <span className="post-like-text">Like</span>
                    </div>
                    <div className="post-bottom-last-right">
                        <div className="post-bottom-last-right-comment">
                            <Comment className="right-like-icon" style={{fontSize: "20px"}} />
                            <span className="post-like-text">Comment</span>
                        </div>
                        <div className="post-bottom-last-right-share">
                            <Share className="right-like-icon" style={{fontSize: "20px"}} />
                            <span className="post-like-text">Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
