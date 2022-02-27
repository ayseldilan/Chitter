import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed url={"https://twitter.com/dilan_coding"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dilan_coding"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/ayseldilan"}
          options={{ text: "#reactjs is awesome", via: "dilan_coding" }}
        />
      </div>
    </div>
  );
}

export default Widgets;