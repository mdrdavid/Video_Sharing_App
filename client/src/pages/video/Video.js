
import React, { useEffect, useState } from 'react'
import "./video.css"
import Card from "../../components/videocard/Card"
import Comments from '../../components/comments/Comments'
import { useSelector } from 'react-redux'
import { useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux"
import {MdOutlineThumbUp} from "react-icons/md"
import {BsHandThumbsDown} from "react-icons/bs"
import {MdOutlineReplyAll} from "react-icons/md"
import {MdAddTask} from "react-icons/md"
import axios from 'axios'
import { fetchSuccess } from '../../redux/videoSlice'
import { format } from 'timeago.js'



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
  
  return (
    <div className="container">
      <div className="content">
        <div className='video-wrapper'>
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
            <button className='button'>
              {/* <MdOutlineThumbUp /> {currentVideo.likes?.length} */}
            </button>
            <button className='button'>
              <BsHandThumbsDown /> Dislike
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
                {/* {currentVideo.desc} */}
              </p>
            </div>
          </div>
          <h5 className ="Subscribe">SUBSCRIBE</h5>
        </div>
        <div />
        <Comments/>
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
