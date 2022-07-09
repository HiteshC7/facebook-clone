import React, { useEffect, useState } from 'react'
import "./feed.css"
import Storyreel from './Storyreel'
import Messagesender from './Messagesender';
import Post from './Post';
import db from './firebase';
const Feed = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot) => (
      setposts(snapshot.docs.map((doc) => (
         {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
  }, [])

  return (
    <div className="feed">
      <Storyreel />
      <Messagesender />
      {posts.map((curelem) => (
        <Post key={curelem.id} profilepic={curelem.data.profilepic} message={curelem.data.message} timestamp={curelem.data.timestamp} image={curelem.data.image} username={curelem.data.username} />
        )

      )}
    </div>
  )
}

export default Feed