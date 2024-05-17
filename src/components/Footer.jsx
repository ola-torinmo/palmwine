import React from 'react'
import logo from "../assets/logo.png"
import ticktok from '../assets/ticktok.png'
import x from '../assets/x.png'
import ig from '../assets/ig.png'
import copyright from '../assets/copyright.png'

const Footer = () => {
  return (
    <div className='w-[100%] bg-[#121212] flex justify-center py-[5%]'>
        <div className='flex-col'>
        <div className='pb-[50px] md:ml-[0%] ml-[10%]'>
          <img src={logo} alt="logo" />
        </div>
        <div className='flex pb-[50px] md:ml-[0%] ml-[10%]'>
          <img src={ticktok} alt="ticktok" className='w-[35px] h-[35px] mr-5'  />
          <img src={x} alt="x" className='w-[35px] h-[35px] flex mr-5'  />
          <img src={ig} alt="ig " className='w-[35px] h-[35px]' />
        </div>
        <div className=' w-[180px] md:ml-[-9%]'>
          <img src={copyright} alt=" copyright"  />
        </div>

        </div>
    </div>
  )
}

export default Footer