import React from "react"
import Button from "./Button"
import Logo from "./Logo"
import './navbar.css'
import Search from "./Search"
import {Link} from "react-router-dom"

const NavBar =()=>{
    return(
        <div className="nav-container">
             <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo/>
            </Link>
        <Search/>
        <Button/>
        </div>
    )

}
export default NavBar