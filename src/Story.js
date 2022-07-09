import { Avatar } from '@mui/material'
import React from 'react'
import "./story.css"
const Story = ({image,src,title}) => {
  return (
    <div style={{backgroundImage:`url(${image})`}} className="story">
        <Avatar className="story-avatar" src={src}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story