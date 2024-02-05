import React from 'react'
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

function Contact() {
  const opts = {
    height: "480",
    width: "1360",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  return (
    <div>
      <h1 className='contact'>Welcome to Contact Page</h1>
      <YouTube videoId="sNzqnktKaPg" opts={opts}  />
      
    </div>
    
  )
  
}

export default Contact