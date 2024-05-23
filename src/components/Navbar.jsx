import React,{ useState } from "react";
import logo from "../assets/logo.png"
import close from "../assets/close.svg"
import hamburgerMenu from "../assets/hamburgermenu.svg"
import tick from "../assets/ticket.svg"
import { Link } from 'react-router-dom';
import '../App.css'


const Navbar = ()=>{
    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    return(
        <div className="w-full h-[70px] bg-[#121212] md:py-[1%] py-[13%]">
            <div className='md:max-w-[1028px] max-w-[600px] 2xl:max-w-[1536px] m-auto w-full h-full flex justify-between items-center md:px-0 px-6 ipad-prov:px-[5%] ipad-v:px-[3%] '>
                <Link to="/">
                <img src={logo} className="md:h-[50px] h-[40px] md:w-[100px] w-[80px] md:ml-[-50%]" alt="nexant" />
                </Link>
                <div className="hidden md:flex items-center">
                <ul className="flex gap-6 2xl:gap-12 pr-[150px] ipad-v:text-[13px] text-[16px] text-[#C3C3C3] ml-[-20%] ">
                    <li><Link to="/palmtree">The Palmtree</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/event">Events</Link></li>
                    
                </ul>
                <a href="https://tix.africa/discover/plmwndfrns" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#C4942D] text-[#101010] w-[131px] h-[40px] rounded-full text-sm ml-[140%] flex">
                        <img src={tick} className="mr-1 ml-7 mt-3" alt="Tick icon" />
                        <p className="mt-2.5 font-medium">Tickets</p>
                    </button>
                </a>
                </div>
                <div className='md:hidden mx-auto' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} className=" w-10 h-10 " />
                    
                </div>
                <div className='md:hidden '>
                 <a href="https://tix.africa/discover/plmwndfrns" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#C4942D] text-[#101010] w-[121px] h-[35px] rounded-full text-md ml-[0%] flex ">
                       <img src={tick} className="mr-1 ml-6 mt-2" />
                       <p className="mt-1 font-medium" > Tickets</p>
                    </button>
                 </a>  
                </div>
            </div>

            <div className={toggle ? 'absolute z-10 p-4 bg-[#C4942D]  text-white w-full mt-10 px-8 md:hidden border-b' : 'hidden'}>
                <ul className="ml-[37%] text-[16px] ">
                <li className='p-4 hover:text-[#434344] hover:bg-white  text-white'><Link to="/palmtree">The Palmtree</Link></li>
                <li className='p-4 hover:text-[#434344] text-white'><Link to="/about">About</Link></li>
                <li className='p-4 hover:text-[#434344] text-white'><Link to="/event">Events</Link></li>
                </ul>
                {/* <Link to="/contact">
                <button className="bg-white text-[#C4942D] mt-[10px] ml-[28%] px-12 py-2 rounded-md text-sm"></button>
                </Link> */}
                <Link to="/">
                    <button className="bg-[#C4942D] text-white w-[131px] h-[40px] rounded-full text-sm ml-[140%] flex ">
                       <img src={tick} className="mr-1 ml-7 mt-2" />
                       <p className="mt-2.5 font-medium" > Tickets</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar; 