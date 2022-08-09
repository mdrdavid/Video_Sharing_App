import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "../components/videocard/Card"
import "./home.css"
import NavBar from '../components/navbar/NavBar'
import Menu from '../components/sidemenu/Menu'

const Home = ({type}) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`videos/${type}`)
            setVideos(res.data)
        }
        fetchVideos()
    }, [type])

    return (
        <div>
            <NavBar />
            <div className="my-container">
                <Menu />
                <div className='video-container'>
                    {videos.map((video) => (
                        <Card key={video._id} video={video}/>
                    ))}

                </div>
            </div>

        </div>
    )
}
export default Home
