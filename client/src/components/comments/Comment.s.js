

import React, { useSyncExternalStore } from "react";
import "./comments.css"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Comment from "./Comment";
import { useSelector } from "react-redux";



const Comments = ({videoId}) => {

    const {currentUser} = useSelector((state)=>state.user)
    
    const [comments, setComments]= useState([])
  useEffect(()=>{
    const fetchComments = async ()=>{
      try{
        const res = await axios.get(`/comments/${videoId}`)
        setComments(res.data)
      }catch(err){}
    }
    fetchComments()
  },[videoId])
  return (
    <div className="container">
      <div className="new_comment">
        {/* <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" /> */}
        <div className="avator"/>
        <img src={currentUser.img} alt=''/>
        <div>
        <input placeholder="Add a comment..." />
        </div>
      </div>
      {comments.map((comment)=>(
           <Comment key={comment._id} comment={comment}/>
      ))}
     
    </div>
  );
};

export default Comments;