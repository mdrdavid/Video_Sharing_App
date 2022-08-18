import React, {useState} from "react"
import Button from "./Button"
import Logo from "./Logo"
import './navbar.css'
import Search from "./Search"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import {MdMissedVideoCall} from "react-icons/md"
import Upload from "../upload_video/Upload"
// import {FaUserAlt} from "react-icons/fa"

const NavBar =()=>{
    const [open,setOpen] =useState(false)
    const {currentUser} = useSelector(state=>state.user)
    return(
        <>
        <div className="nav-container">
             <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo/>
            </Link>
        <Search/>

        {currentUser ? (
            <div className="user">
                <MdMissedVideoCall className="icon" onClick={()=>setOpen(true)}/>
            <div className ="avato">
                <img src={currentUser?.img} alt="" className="avator"/>
                </div>
                {currentUser?.name}
            </div>
        ) :
        (
            <Button onClick={()=>setOpen(true)}/>
        )
    }
       
        </div>
        {open && <Upload setOpen ={setOpen}/>}
        </>
    )

}
export default NavBar