import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "../components/videocard/Card"
import "./home.css"

const Home =() =>{
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        const fetchVideos = async ()=>{
        const res = await axios.get("videos/random")
        setVideos(res.data)
        }
        fetchVideos()
    },[])
    
  return (
    <div className='container'>
        {videos.map((video)=>(
             <Card/>
        ))}
   
    </div>
  )
}
export default Home
