import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage ] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Dilan",
            username: "dilan_coding",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.pinimg.com/originals/99/8f/c1/998fc143119e23cd4f50f9f32b8cc556.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

  return (
    <div className='tweetBox'>
        <form >
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/99/8f/c1/998fc143119e23cd4f50f9f32b8cc556.png" />
          <input 
          onChange={e => setTweetMessage(e.target.value)}
          value={tweetMessage} placeholder="What's happening?" type="text"/>
        </div>
        <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)}
        className='tweetBox__imageInput' 
        placeholder='Optional: Enter image URL' 
        type="text">
        </input>
        <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>
          Tweet
        </Button>
        </form>
        TweetBox
    </div>
  )
}

export default TweetBox