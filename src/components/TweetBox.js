import React from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form >
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/99/8f/c1/998fc143119e23cd4f50f9f32b8cc556.png" />
          <input placeholder="What's happening?" type="text"/>
        </div>
        <input className='tweetBox__imageInput' 
        placeholder='Optional: Enter image URL' 
        type="text">
        </input>
        <Button className='tweetBox__tweetButton'>
          Tweet
        </Button>
        </form>
        TweetBox
    </div>
  )
}

export default TweetBox