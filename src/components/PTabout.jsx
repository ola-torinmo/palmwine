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
            <p className='text-white md:text-[18px] text-[14px] md:w-[900px]'>There has been a significant decline in people actually partying, especially for a vibrant, energetic, youth-centric 
              community in Lagos. Palmwine & Friends is what you call a party! With everything for everyone ranging from 
              Afrobeats to Amapiano to Swedish house, we continue to create experiences for our community. 
              We make movies, come star in them if you care to join us..</p>
        </div>
    </div> 
  )
}

export default PTabout