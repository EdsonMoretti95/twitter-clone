import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://github.com/EdsonMoretti95.png"/>                
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Edson Moretti 
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge"/> @emoretti
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Twitter clone post with image</p>
                    </div>
                </div>
                <img src="https://media0.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif?cid=ecf05e47zfdiw4oygkbvh29a13b63tb3h9ycxgblre4xiesz&rid=giphy.gif&ct=g" alt="" />

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>            
            </div>                
        </div>
    )
}

export default Post
