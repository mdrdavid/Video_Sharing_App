
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/videocard/Card'
import "./search.css"

const Search = () => {
    const [videos, setVideos] =useState([])
    const query = useLocation().search
    useEffect(()=>{
        const fetchVideos = async ()=>{
            const res = await axios.get(`videos/search${query}`)
            setVideos(res.data)
        }
        fetchVideos()
    },[query])

  return (
    <div className='search_container'>

    {videos.map(video=>(
        <Card key={video._id} video={video}/>
    ))}
    </div>
  )
}

export default Search