import React from 'react'
import group from '../assets/Group.png'
import welcome from '../assets/Welcome.png'

 const Hero = () => {
  return (
    <div className='w-full bg-[#121212] absolute '>
        <div className='mt-[-9%] pb-[5%]'>
        <img className='md:ml-[16%] ml-[15%]  mt-[20%] md:w-[882px] w-[270px] ' src={welcome} alt="" />
        <img className='ml-[12%] mt-[-12%] md:w-[1000px] w-[300px]' src={group} alt="" />
        </div>
        
        

    </div>
  )
}
export default Hero