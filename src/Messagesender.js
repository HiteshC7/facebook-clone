import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./messagesender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './Stateprovider';
import db from './firebase';
import firebase from 'firebase/compat/app';
const Messagesender = () => {
    const [{ user }, dispatch] = useStateValue()
    const [input, setinput] = useState("")
    const [url, seturl] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilepic:user.photoURL,
            username:user.displayName,
            image:url,

        })
        setinput("")
        seturl("")
    }
    return (
        <div className="messagesender">
            <div className="messagesender-top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(event) => setinput(event.target.value)} className="messagesender-input" placeholder={`What's on your mind, ${user.displayName}?`}>
                    </input>
                    <input value={url} onChange={(event) => seturl(event.target.value)} className=" " placeholder="image URL (Optional)">
                    </input>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="messagesender-bottom">
                <div className="messagesender-option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messagesender-option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messagesender-option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default Messagesender