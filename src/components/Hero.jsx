import React from 'react'
import group from '../assets/Group.png'
// import welcome from '../assets/Welcome.png'

 const Hero = () => {
  return (
    <div className='w-full bg-[#121212] absolute '>
        <div className='my-[5%] md:my-[7%] md:pb-[0%] pb-[5%]'>
        {/* <img className='md:ml-[16%] ml-[15%]  mt-[20%] md:w-[882px] w-[270px] ' src={welcome} alt="" /> */}
        <h1 className='text-white text-center md:text-[65px] text-[35px]  pt-[5%]'>Palmwine & Friends</h1>
        <img className='mx-auto md:mt-[-14%] mt-[-17%] md:w-[1000px] w-[350px]' src={group} alt="" />
        </div>
        
        

    </div>
  )
}
export default Hero