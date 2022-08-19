import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

const Search =() => {
  const navigate = useNavigate()
  const [q, setQ] = useState("")
    const [data, setData]= useState({
        search: ""
    })
    // const handleChange=(e)=>{
    //     setData((prev)=>({...prev, [e.target.name]: e.target.value}))
    // }
    

  return (
    <div className='search'>
        <input 
        className='search-input'
        type="text" 
        placeholder ="search"
        // value ={data.search}
        name="search"
        // onChange = {handleChange}
         onChange ={e=>setQ(e.target.value)}/>
        <AiOutlineSearch className='input-icon' onClick={()=>navigate(`/search?q=${q}`)}/>
    </div>
  )
}
export default Search