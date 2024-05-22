import React, { useEffect } from 'react'
import meet from '../assets/meet.png'
import line from '../assets/line.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Meet = () => {

  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])

  return (
    <div className='w-full bg-[#121212] md:flex justify-around pb-[10%]'>
    <div className='text-white pt-[10%] ' data-aos="fade-up">
        <h1 className='md:text-[50px] text-[30px] md:text-left text-center pb-3'>Meet Plamwine</h1>
        <img src={line} className='md:pb-3 pb-[30px] md:w-[463px] w-[70%] md:ml-[0px] ml-[15%]' />
        <p className='md:w-[500px] w-[80%] md:text-left text-center md:ml-[0px] ml-[10%] md:pb-[0%] pb-[30px]'>Say hi to Palmwine. Our resident vibes in chief, the pied piper himself as he hypnotizes ragers and ravers with his contagious sound and energy that gets you partying till your legs give out.</p>
    </div>
    <div className='pt-[10%]'>

        <img src={meet} className='md:w-[594px] w-[80%] md:ml-[0px] ml-[10%]' data-aos="fade-down"/>
    </div>
    </div>
  )
}

export default Meet