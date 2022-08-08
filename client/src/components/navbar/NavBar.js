import React from "react"
import Button from "./Button"
import Logo from "./Logo"
import './navbar.css'
import Search from "./Search"

const NavBar =()=>{
    return(
        <div className="container">
            <Logo/>
        <Search/>
        <Button/>
        </div>
    )

}
export default NavBar