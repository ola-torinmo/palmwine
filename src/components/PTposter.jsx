import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import poster from '../assets/palmwinemin.jpg'

const PTposter = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])
  return (
    <div>
        <div className='px-[5%] py-[%] ' data-aos="fade-down">
            <h1 className='text-white text-center md:text-[75px] text-[45px] my-[15%] md:my-[5%]'>Don’t be told, be there!</h1>
            <div>
                <img src={poster} className='md:w-[750px] md:h-[750px] h-[500px] mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default PTposter