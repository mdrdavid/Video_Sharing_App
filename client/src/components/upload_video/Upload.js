import React, { useState } from 'react'
import './upload.css'

const Upload =({setOpen}) => {
  const [img, setImg]= useState(null)
  const [video, setVideo]= useState(null)
  const [imgPerce, setPerce]= useState(0)
  const [videoPerce, setvideoPerce]= useState(0)

  return (
    <div className='upload_conatiner'>
        <div className='video_wrapper'>
            <div className='close'onClick={()=>setOpen(false)}>X</div>
            <h1 className='title'>Upload a Video</h1>
            <label>Video</label>
            <input className='input'type="file" accept="video/*"
            onChange={e=>setVideo(e.target.files[0])}
            />
            <input className='input'type="text" placeholder="Title/*"/>
            <textarea className='video_desc'placeholder='Description'rows={8}/>
            <input className='input'type="text" placeholder="Separate Tags with Commas/*"/>
            <label>Image</label>
            <input className='input'type="file" accept="image/*"
            onChange={e=>setImg(e.target.files[0])}
            />
            <button className='upload_button'>Upload</button>
        </div>
    </div>
  )
}
export default Upload