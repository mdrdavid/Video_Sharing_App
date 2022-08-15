
import React, { useEffect, useState } from 'react'
import "./video.css"
import Card from "../../components/videocard/Card"
import Comments from '../../components/comments/Comment'
import { useSelector } from 'react-redux'
import { useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux"
import {MdOutlineThumbUp} from "react-icons/md"
import {BsHandThumbsDown} from "react-icons/bs"
import {MdOutlineReplyAll} from "react-icons/md"
import {FiThumbsUp} from "react-icons/fi"
import {BsHandThumbsDownFill} from "react-icons/bs"
import {MdAddTask} from "react-icons/md"
import axios from 'axios'
import { fetchSuccess, like, dislike} from '../../redux/videoSlice'
import { format } from 'timeago.js'
import { subscriptin } from '../../redux/userSlice'



const Video = () =>{
  const {currentUser} = useSelector((state)=>state.user)
  console.log(currentUser)
  const {currentVideo} = useSelector((state)=>state.video)
  console.log(currentVideo)
  const dispatch = useDispatch()
  const path = useLocation().pathname.split("/")[2]

  // const [video, SetVideo] =useState({})
  const [channel, SetChannel] =useState({})

  useEffect(()=>{
    const fetchData = async()=>{
    try{
      const videoRes = await axios.get(`/videos/find/${path}`)
      const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)

      // SetVideo(videoRes.data)
      SetChannel(channelRes.data)
      dispatch(fetchSuccess(videoRes.data))

    }catch(err){}
  }
  fetchData()
  },[path,dispatch])
  

  const handleLike = async () =>{
    await axios.put(`/users/like/${currentVideo._id}`)
    dispatch(like(currentUser._id))
  }


  const handleDislike = async () =>{
    await axios.put(`/users/dislike/${currentVideo._id}`)
    dispatch(dislike(currentUser._id))

  }

  const handleSubscribe = async () =>{
    currentUser.subscribedUsers.includes(channel._id) 
    ? await axios.put(`/users/unsub/${channel._id}`)
    : await axios.put(`/users/sub/${channel._id}`)
    dispatch(subscriptin(channel._id))

  }

  return (
    <div className="container">
      <div className="content">
        <div className='video-wrapper'>
          <div className='video_frame'src={currentVideo.videoUrl}></div>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* <h5 className='title'>{currentVideo.title}</h5> */}
        <div className='details'>
          {/* <h6>{currentVideo.views} views • {format(currentVideo.createdAt)}</h6> */}
          <div className='buttons'>
            <button className='button' onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser._id) ? (<FiThumbsUp/>):
              (<MdOutlineThumbUp />)}{""}
                {currentVideo.likes?.length}
            </button>
            <button className='button' onClick={handleDislike}>
            {currentVideo.likes?.includes(currentUser._id) ? (<BsHandThumbsDownFill/>): 
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
            {/* <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt='img'/> */}
            <img src={channel.img} alt=''/>
            <div className="channelDetail">
              <h5 className='channel-name'>{channel.name}</h5>
              <div className ="channel-counter">{channel.subscribers} subscribers</div>
              <p className='description'>
                best 
                {/* {currentVideo.desc} */}
              </p>
            </div>
          </div>
          <button className ="Subscribe" onClick={handleSubscribe}> 
          {currentUser.subscribedUsers?.includes(channel._id)?
          "SUBSCRIBE" :
          "SUBSCRIBED"}
          SUBSCRIBE
           </button>
        </div>
        <div />
        <Comments videoId={currentVideo._id}/>
      </div>
      {/* <div className='recommendations'>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </div> */}
    </div >
  )
}
export default Video
