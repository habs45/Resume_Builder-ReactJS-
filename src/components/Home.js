import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='header'>
        <div className='header_left'>
   <span className='header_heading'>A <span className='header_blue'>Resume</span> that<br/> stands out!</span>
 <br/>
   <span className='header_heading'>Make your own <br/>resume.<span className='header_blue'> It's free</span></span>
    </div>
    <div className='header_right'>

        <img src='https://img.freepik.com/free-vector/resume-writing-service-abstract-concept_335657-3098.jpg'/>

    </div>
    
    </div>
    <div className='header_btn'>
      <Link to='/mainpage'>
    <button className='start_btn'>
      Build a Resume
    </button>
    </Link>
    </div>
    </>
  )
}

export default Home