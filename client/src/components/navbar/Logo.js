import React from 'react'
import "./navbar.css"
import youtube from "../../assets/youtube.jpg"

const Logo =() =>{
  return (
    <div className='logo'>
        <img src={youtube} alt='logo'/>
        Mdr2021 Video
        </div>
  )
}
export default Logo