import { Avatar } from '@mui/material'
import React from 'react'
import "./sidebarrow.css"
const Sidebarrow = ({src,title,Icon}) => {
  return (
    <div className="sidebarrow">
        {src&&<Avatar src={src}/>}
        {Icon&&<Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default Sidebarrow