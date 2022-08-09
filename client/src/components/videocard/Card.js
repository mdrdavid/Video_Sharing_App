import React from "react"
import {Link} from "react-router-dom"
import "./cards.css"

const Card =()=>{
   
    return(
        <Link to="/video/test" style={{ textDecoration: "none" }}>

            <div className="container">
                <div className="video">VIDEO</div>
                <div className="video-details">
                    <div className="channel-image">IMAGE</div>
                    <div className="detail">
                    <div className="video-title">test video</div>
                    <div className="channel-name">NTV</div>
                    <div className="info">98 views .1 day ago</div>
                    </div>
                </div>
            </div>
        </Link>
       
    )
}
export default Card