
import React, { useEffect, useState } from 'react'
import Card from "../../components/videocard/Card"
import axios from 'axios'
import "./recommend.css"

export const Recommendation = ({tags}) => {
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        const fetchVideos = async () =>{
            const res = await axios.get(`/videos/tags?tags=${tags}`)
            setVideos(res.data)
        }
        fetchVideos()
    },[tags])

  return (
    <div className='recommendation'>
        {videos.map(video=>(
          <Card type="sm" key={video._id} video={video}/>
        ))}
        </div>
  )
}
