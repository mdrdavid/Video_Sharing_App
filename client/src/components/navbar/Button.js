import React, { useState } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {MdOutlineAccountCircle} from "react-icons/md"
import { useSelector } from "react-redux"
import Upload from "../upload_video/Upload"
// import {MdMissedVideoCall} from "react-icons/md"
// import {FaUserAlt} from "react-icons/fa"

const Button = () => {
    const [open,setOpen] =useState(false)
    return (
        <>
            <Link to="/signin" className="link">
            <button className='button'>
                <MdOutlineAccountCircle onClick={()=>setOpen(true)}/>
                SIGN IN
            </button>
        </Link>
        {open && <Upload setOpen ={setOpen}/>}
        </>
    )
}
export default Button
