import React, { useState } from 'react'
import "./navbar.css"

const Search =() => {
    const [data, setData]= useState( "")
    const handleChange=(e)=>{
        setData((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    

  return (
    <div className='search'>
        <input 
        className='input'
        type="text" 
        placeholder ="search"
        value ={data}
        name="serach"
        onChange = {handleChange}/>
    </div>
  )
}
export default Search