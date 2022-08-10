import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import "./navbar.css"

const Search =() => {
    const [data, setData]= useState({
        search: ""
    })
    const handleChange=(e)=>{
        setData((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    

  return (
    <div className='search'>
        <input 
        className='search-input'
        type="text" 
        placeholder ="search"
        value ={data.search}
        name="search"
        onChange = {handleChange}/>
        <AiOutlineSearch className='input-icon'/>
    </div>
  )
}
export default Search