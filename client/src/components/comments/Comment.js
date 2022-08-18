
import { useEffect, useState } from "react"
import "./comments.css"
import axios from "axios"

const  Comment =({comment}) => {
  const[channel, SetChannel] =useState([])

  useEffect(()=>{
    const fetchComment = async () =>{
      const res = await axios.get(`/users/find/${comment?.userId}`)
  SetChannel(res.data)

    }
    fetchComment()
  },[comment?.userId])
  return (
    <div className='container'>
      {/* <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt=''/> */}
      <img src={channel.img} alt=''/>
      <div className='details'>
        <p className='name'>
          {channel.name} <span className='date'>1 day ago</span>
        </p>
        <p className='text'>
         {comment?.desc}
        </p>
      </div>
    </div>
  )
}
export default Comment
