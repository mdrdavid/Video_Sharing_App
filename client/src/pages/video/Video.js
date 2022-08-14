
import React from 'react'
import "./video.css"
import Card from "../../components/videocard/Card"
import Comments from '../../components/comments/Comments'


const Video = () =>{
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
        <h5 className='title'>Test Video</h5>
        <div className='details'>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <div className='buttons'>
            <button className='button'>
              <ThumbUpOutlinedIcon /> 123
            </button>
            <button className='button'>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </button>
            <button className='button'>
              <ReplyOutlinedIcon /> Share
            </button>
            <button className='button'>
              <AddTaskOutlinedIcon /> Save
            </button>
          </div>
        </div>
        <div  className='hr'/>
        <div className='channel'>
          <div className="channel-Info">
            <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <div className="channelDetail">
              <h5 className='channel-name'>Lama Dev</h5>
              <div className ="channel-counter">200K subscribers</div>
              <p className='description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </p>
            </div>
          </div>
          <h5 className ="Subscribe">SUBSCRIBE</h5>
        </div>
        <div />
        <Comments/>
      </div>
      <div className='recommendations'>
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
      </div>
    </div >
  )
}
export default Video
