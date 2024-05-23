import React, { useEffect } from 'react'
import aboutpt1 from '../assets/aboutpt1.png'
import aboutpt2 from '../assets/aboutpt2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const PTabout = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])
  return (
    
    <div>
        <div className='px-[5%] py-[5%] ' data-aos="fade-down">
            
            <div className='flex flex-col md:flex-row'>
                <img src={aboutpt1} className='mb-10 md:mr-10 ' />
                <img src={aboutpt2} className='mb-10 ' />
            </div>
            <h1 className='text-white md:text-[60px] text-[35px] mb-5'>More than a party, its an experience</h1>
            <p className='text-white md:text-[18px] text-[16px]'>We make movies, come star in them.</p>
        </div>
    </div>
  )
}

export default PTabout