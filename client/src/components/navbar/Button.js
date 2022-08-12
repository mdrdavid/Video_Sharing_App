import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {MdOutlineAccountCircle} from "react-icons/md"
import { useSelector } from "react-redux"
import {MdMissedVideoCall} from "react-icons/md"
import {FaUserAlt} from "react-icons/fa"

const Button = () => {
    const {currentUser} = useSelector(state=>state.user)
    return (
        <>
        {/* {currentUser ? (
            <div className="user">
                <MdMissedVideoCall/>
            <div className ="avator">
                <FaUserAlt/>
                </div>
                {currentUser.name}
            </div>
        ) :
        ( */}

            <Link to="/signin" className="link">
            <button className='button'>
                <MdOutlineAccountCircle />
                SIGN IN
            </button>
        </Link>

        {/* )
    } */}
        </>
    )
}
export default Button
