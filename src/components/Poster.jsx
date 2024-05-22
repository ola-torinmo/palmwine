import React from 'react'
import poster from '../assets/poster.png'
import poster2 from '../assets/poster2.png'
import { Link } from 'react-router-dom';


const Poster = () => {
  return (
    <div className='flex flex-col md:flex-row space-x-[200px] w- px-[5%] py-[5%] '>
        <div>
            <img src={poster} className='w-[750px] h-[750px]' />
        </div>
        <div className='mt-[15%]'> 
            <img src={poster2} alt="" />
            <Link to="/">
                    <button className="bg-[#C4942D] text-[#101010] w-[231px] h-[40px] rounded-full text-sm ml-[15%]    ">
                       
                       <p className=" font-medium" > Subscribe to our newsletter</p>
                    </button>
            </Link>
        </div>
    </div>
  )
}

export default Poster