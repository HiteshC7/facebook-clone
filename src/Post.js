import { Avatar } from '@mui/material'
import React from 'react'
import "./post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Post = ({profilepic,image,username,timestamp,message}) => {
  return (
    <div className="post" >
        <div className="post-top">
            <Avatar className="post-avatar" src={profilepic}/>
            <div className='post-top-info'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
        <div className="post-bottom">
            <p>{message}</p>
        </div>
        <div className='post-image'>
            <img src={image} alt="" ></img>
        </div>
        <div className="post-options">
            <div className="post-options-individual">
                <ThumbUpIcon/>
                <p>Like</p>
            </div>
            <div className="post-options-individual">
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
            </div>
            <div className="post-options-individual">
                <NearMeIcon/>
                <p>Share</p>
            </div>
            <div className="post-options-individual">
                
                <AccountCircleIcon/>
                <ExpandMoreOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Post