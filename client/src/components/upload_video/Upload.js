
import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase"
import { useNavigate } from "react-router-dom";
import axios  from "axios"
import './upload.css'


const Upload =({setOpen}) => {
  const navigate = useNavigate()
  const [img, setImg]= useState(null)
  const [video, setVideo]= useState(null)
  const [imgPerce, setImgPerce]= useState(0)
  const [videoPerce, setvideoPerce]= useState(0)
  const [inputs, setInputs]= useState({})
  const [tags, setTags]= useState([])

  const handleChange = (e) =>{
    setInputs(prev =>{
      return{...prev, [e.target.name]: e.target.value}
    })
  }
  const handleTags =(e) =>{
    setTags(e.target.value.split(','))
  }

    const handleUpload =async (e) =>{
      e.preventDefault()
      const res = await axios.post("/videos", {...inputs,tags})
      setOpen(false)
      res.status === 200 && navigate(`/video/${res.data._id}`)
    }
    
    const uploadFile =(file, urlType) =>{
      const storage = getStorage(app)
      const fileName = new Date().getTime() +file.name
      const storageRef = ref(storage,'images/' + fileName)

      const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    urlType === "imgUrl" ? setImgPerce(Math.round(progress)): setvideoPerce(Math.round(progress))
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {}, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setInputs(prev =>{
        return{...prev, [urlType]: downloadURL}
      })
      // console.log('File available at', downloadURL);
    });
  }

);

    }

  useEffect(()=>{video && uploadFile(video, "videoUrl")},[video])
  useEffect(()=>{img && uploadFile(img, "imgUrl")},[img])

  return (
    <div className='upload_conatiner'>
        <div className='video_wrapper'>
            <div className='close'onClick={()=>setOpen(false)}>X</div>
            <h1 className='title'>Upload a Video</h1>
            <label>Video</label>
            {videoPerce >0 ? ("Uploading" + videoPerce + "%"
            ) : (
              <input className='input'type="file" accept="video/*"
              onChange={e=>setVideo(e.target.files[0])}
              />
            )}
            
            <input className='input'type="text" 
            name='title'
            placeholder="Title"
            onChange={handleChange}
            />
            <textarea className='video_desc'
            name='desc'
            placeholder='Description'rows={8}
            onChange={handleChange}
            />
            <input className='input'type="text" placeholder="Separate Tags with Commas/*"
            onChange={handleTags}
            />
            <label>Image</label>
            {imgPerce >0 ? ("Uploading" + imgPerce + "%"
            ) :(
            <input className='input'type="file" accept="image/*"
            onChange={e=>setImg(e.target.files[0])}
            />)}
            <button className='upload_button' onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )
}
export default Upload