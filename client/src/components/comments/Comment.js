
import "./comments.css"

const  Comment =() => {
  
  return (
    <div className='container'>
      <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt=''/>
      <div className='details'>
        <p className='name'>
          John Doe <span className='date'>1 day ago</span>
        </p>
        <p className='text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </p>
      </div>
    </div>
  )
}
export default Comment
