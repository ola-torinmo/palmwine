import React, { useEffect } from 'react'
import aboutpt from '../assets/aboutpt.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const PTabout = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])
  return (
    
    <div>
        <div className='   px-[5%] py-[5%] ' data-aos="fade-down">
            
            <div>
                <img src={aboutpt} className='mb-10 ' />
            </div>
            <h1 className='text-white  text-[60px] mb-5'>More than a party, its an experience</h1>
            <p className='text-white text-[18px]'>We make movies, come star in them.</p>
        </div>
    </div>
  )
}

export default PTabout