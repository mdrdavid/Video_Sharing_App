import React from "react"
import Button from "./Button"
import Logo from "./Logo"
import './navbar.css'
import Search from "./Search"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import {MdMissedVideoCall} from "react-icons/md"
// import {FaUserAlt} from "react-icons/fa"

const NavBar =()=>{
    const {currentUser} = useSelector(state=>state.user)
    return(
        <div className="nav-container">
             <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo/>
            </Link>
        <Search/>

        {currentUser ? (
            <div className="user">
                <MdMissedVideoCall/>
            <div className ="avator">
                <img src={currentUser.img} alt=""/>
                </div>
                {currentUser.name}
            </div>
        ) :
        (
            <Button/>
        )
    }
       
        </div>
    )

}
export default NavBar