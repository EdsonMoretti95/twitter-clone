import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon/>
                <input placeholder="Search Twitter" type="text" />
            </div>
            
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1344277347181228033"}/>

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="disorderz"
                    options={{ height: 400 }}                
                />

                <TwitterShareButton
                    url={"https://facebook.com/Moretti95"}
                    options={{ text: "twitter clone", via: "twitter"}}
                />
            </div>
        </div>
    )
}

export default Widgets
