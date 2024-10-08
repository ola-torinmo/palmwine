import React, { useEffect }  from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import poster from '../assets/palmwinehalloween.jpg'
// import poster2 from '../assets/poster2.png'
// import poster3 from '../assets/1frame.png'
import inside from '../assets/inside.png'
// import { Link } from 'react-router-dom';
import { useScroll } from './ScrollContext';
import logo from "../assets/logo.png"

const Poster = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])

// scroll function
  const subscribe = useScroll();

  const scrollToSection =(elementRef)=>{
    window.scrollTo({

      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    
      <div className='flex flex-col md:flex-row md:space-x-[200px] w- px-[5%] py-[%] '>
          <div className='hidden lg:block overflow-hidden ' data-aos="fade-right">
              <img src={poster} className='md:w-[750px] md:h-[750px] h-[500px] my-[15%]' />
          </div>
          <div className='mt-[20%] hidden lg:block' data-aos="fade-left"> 
              {/* <img src={poster2} alt="" /> */}
              <div className='text-center' >
                <h1 className='text-white text-[32px] mb-[20px]'>Featured</h1>
                <p className='text-[#F3F3F3] opacity-75 text-[18px] mb-[20px]'>Upcoming</p>
                <img src={logo} className="md:h-[100px] h-[40px] md:w-[190px] w-[80px] mb-[20px] mx-auto " alt="" />
                <h1 className='text-white text-[25px] '>October</h1>
                <h1 className='text-white text-[25px] mb-[20px]'>25th</h1>
                <p className='text-[#F3F3F3] opacity-75 text-[18px] w-[378px] mb-[20px]'>Get inside info and community perks from 
                free tickets to free drinks at any of our events</p>
              </div>
              <button onClick={() =>scrollToSection(subscribe) } className="bg-[#C4942D] text-[#101010] w-[231px] h-[40px] rounded-full text-sm ml-[15%] md:ml-[20%]    ">
                        
                <p className=" font-medium" > Subscribe to our newsletter</p>
              </button>
          </div>


       {/* <------mobile----> */}

          <div className='px-[5%] md:py-[5%] md:hidden mx-auto ' data-aos="fade-down">
          <div className='text-center mt-[20%]'>
                {/* <img src={poster3} className='md:w-[750px] w-[50%] md:h-[750px] h-[370px] md:my-[15%] my-[15%] mx-auto' /> */}
                <h1 className='text-white text-[32px] mb-[20px]'>Featured</h1>
                <p className='text-[#F3F3F3] opacity-75 text-[18px] mb-[20px]'>Upcoming</p>
                <img src={logo} className="md:h-[100px] h-[90px] md:w-[190px] w-[150px] mb-[20px] mx-auto " alt="" />
                <h1 className='text-white text-[25px] '>October</h1>
                <h1 className='text-white text-[25px] mb-[60px]'>25th</h1> 

            </div>
            <div>
                <img src={poster} className='md:w-[750px] w-[100%] md:h-[350px] h-[540px] md:my-[15%] my-[15%] mx-auto' />
            </div>
            <div>
                <img src={inside} className=' md:my-[15%] my-[15%] mx-auto' />
            </div>
            <div className=''> 
                
                        <button onClick={() =>scrollToSection(subscribe) } className="bg-[#C4942D] text-[#101010] w-[80%] h-[50px] rounded-full text-md   md:mb-[0] mb-[5%] ml-[10%]  ">
                          
                          <p className=" font-bold" > Subscribe to our newsletter</p>
                        </button>
              
            </div>
        </div>
      </div>

     

    

    
    
  )
}

export default Poster