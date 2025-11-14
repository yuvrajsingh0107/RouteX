import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  
  return (
    <>
    <div className="w-full bg-amber-200 flex-col gap-10 items-center  mt-20">
      <h1>
        who are you
      </h1>
      <div className='flex  gap-20 items-center content-center'>
        
        <Link to="/location">Bus Driver</Link>
        <Link to="/map">Student</Link>
      </div>
    </div>
    </>
  )
}

export default Home
