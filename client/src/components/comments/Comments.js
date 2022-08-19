
import React, { useEffect, useState } from 'react'
import "./comments.css"
import axios from 'axios'
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
    <div className="comment_container">
      <div className="new_comment">
        <div className="ava"/>
        <img src={currentUser?.img} alt=''className='avator'/>
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