
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import "./video.css"
import Comments from '../../components/comments/Comments'
import { useSelector } from 'react-redux'
import { useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux"
import {MdOutlineThumbUp} from "react-icons/md"
import {BsHandThumbsDown} from "react-icons/bs"
import {MdOutlineReplyAll} from "react-icons/md"
import {FaThumbsUp} from "react-icons/fa"
import {BsHandThumbsDownFill} from "react-icons/bs"
import {MdAddTask} from "react-icons/md"
import axios from 'axios'
import { fetchSuccess, like, dislike} from '../../redux/videoSlice'
import { format } from 'timeago.js'
import { subscriptin } from '../../redux/userSlice'
import NavBar from '../../components/navbar/NavBar'
import { Recommendation } from '../../components/recommendation/Recommendation'

const VideoFrame = styled.video`
max-height: 720px;
width: 100%;
object-fit: cover`;

const Video = () =>{
  const {currentUser} = useSelector((state)=>state.user)
  const {currentVideo} = useSelector((state)=>state.video)
  const dispatch = useDispatch()
  const path = useLocation().pathname.split("/")[2]

  const [channel, SetChannel] =useState({})

  useEffect(()=>{
    const fetchData = async()=>{
    try{
      const videoRes = await axios.get(`/videos/find/${path}`)
      const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)
      SetChannel(channelRes.data)
      dispatch(fetchSuccess(videoRes.data))

    }catch(error){}
  }
  fetchData()
  },[path,dispatch])
  

  const handleLike = async () =>{
    await axios.put(`/users/like/${currentVideo?._id}`)
    dispatch(like(currentUser?._id))
  }


  const handleDislike = async () =>{
    await axios.put(`/users/dislike/${currentVideo?._id}`)
    dispatch(dislike(currentUser?._id))

  }

  const handleSubscribe = async () =>{
    currentUser?.subscribedUsers.includes(channel._id) 
    ? await axios.put(`/users/unsub/${channel._id}`)
    : await axios.put(`/users/sub/${channel._id}`)
    dispatch(subscriptin(channel._id))

  }
 console.log(currentVideo)
  return (
    <>
    <NavBar/>
    <div className="video_container">
      <div className="content">
        <div className='video-wrapper'>
          <VideoFrame className='videoframe' src={currentVideo?.videoUrl} controls/>
          {/* <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </div>
        <h5 className='title'>{currentVideo?.title}</h5>
        <div className='details'>
          <h6>{currentVideo?.views} views • {format(currentVideo?.createdAt)}</h6>
          <div className='buttons'>
            <button className='button' onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id) ? (<FaThumbsUp/>):
              (<MdOutlineThumbUp />)}{""}
                {currentVideo?.likes?.length}
            </button>
            <button className='button' onClick={handleDislike}>
            {currentVideo?.likes?.includes(currentUser?._id) ? (<BsHandThumbsDownFill/>): 
              (<BsHandThumbsDown />)}{""} 
              Dislike
            </button>
            <button className='button'>
              <MdOutlineReplyAll /> Share
            </button>
            <button className='button'>
              <MdAddTask /> Save
            </button>
          </div>
        </div>
        <div  className='hr'/>
        <div className='channel'>
          <div className="channel-Info">
            <img src={channel.img} alt=''/>
            <div className="channelDetail">
              <h5 className='channel-name'>{channel.name}</h5>
              <div className ="channel-counter">{channel.subscribers} subscribers</div>
              <p className='description'>
                {currentVideo?.desc}
              </p>
            </div>
          </div>
          <button className ="Subscribe" onClick={handleSubscribe}> 
          {currentUser?.subscribedUsers?.includes(channel._id)?
          "SUBSCRIBE" :
          "SUBSCRIBED"}
           </button>
        </div>
        <div />
        <Comments videoId={currentVideo?._id}/>
      </div>
     <Recommendation tags={currentVideo?.tags}/>
    </div >
    </>
  )
}
export default Video
