import React from 'react'
import "./Feed.css";
import TweetBox from "./TweetBox.jsx";

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>            

            {/* TweetBox */}
            <TweetBox />



            {/* T */}
        </div>
    )
}

export default Feed
