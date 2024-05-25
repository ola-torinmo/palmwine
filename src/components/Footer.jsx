import React from 'react'
import logo from "../assets/logo.png"
import ticktok from '../assets/ticktok.png'
import x from '../assets/x.png'
import ig from '../assets/ig.png'
import { Link } from 'react-router-dom';
import copyright from '../assets/copyright.png'

const Footer = () => {
  return (
    <div className='w-[100%] bg-[#121212] flex justify-center py-[5%]'>
        <div className='flex-col'>
        <div className='pb-[50px] md:ml-[0%] ml-[10%]'>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className='flex pb-[50px] md:ml-[0%] ml-[3%]'>
          <a href="https://www.tiktok.com/@palmwineandfriends?_t=8mVKx5YTNUD&_r=1" target="_blank" rel="noopener noreferrer">
            <img src={ticktok} alt="ticktok" className='w-[45px] h-[45px] mr-5' />
          </a>
          <a href="https://x.com/palmwinenfrends?s=21" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="x" className='w-[45px] h-[45px] flex mr-5' />
          </a>
          <a href="https://www.instagram.com/palmwineandfriends?igsh=MTBjMjRleDBqbjlxNg==" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="ig" className='w-[45px] h-[45px]' />
          </a>
        </div>
        <div className=' w-[180px] md:ml-[-9%]'>
          <img src={copyright} alt=" copyright"  />
        </div>

        </div>
    </div>
  )
}

export default Footer