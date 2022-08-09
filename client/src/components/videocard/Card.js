import React from "react"
import {Link} from "react-router-dom"
import "./cards.css"
import {format} from "timeago.js"
import axios from "axios"
import { useEffect,useState } from "react"
// import david from "../../assets/david.jpg"

const Card =({type, video})=>{
    const [channel, setChannel] = useState({})

    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`/users/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    }, [video.userId])
   
    return(
        <Link to="/video/test" style={{ textDecoration: "none" }}>

            <div className="card-container" type={type}>
                <div className="video">
                    <img src={video.imgUrl} style={{height: "100%", width: "100%"}} alt="video"/>
                </div>
                <div className="video-details">
                    <div className="channel-image">{channel.img}</div>
                    <div className="detail">
                    <div className="video-title">{video.title}</div>
                    <div className="channel-name">{channel.name}</div>
                    <div className="info"> {video.views} views .{format(video.createdAt)}</div>
                    </div>
                </div>
            </div>
        </Link>
       
    )
}
export default Card