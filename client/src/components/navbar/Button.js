import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {MdOutlineAccountCircle} from "react-icons/md"

const Button = () => {
    return (
        <>
            <Link to="/signin" className="link">
                <button className='button'>
                    <MdOutlineAccountCircle />
                    SIGN IN
                </button>
            </Link>

        </>
    )
}
export default Button
