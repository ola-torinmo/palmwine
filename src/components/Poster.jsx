import React, { useEffect }  from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import poster from '../assets/poster.png'
import poster2 from '../assets/poster2.png'
import poster3 from '../assets/poster3.png'
import { Link } from 'react-router-dom';
import { useScroll } from './ScrollContext';

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
          <div className='mt-[25%] hidden lg:block' data-aos="fade-left"> 
              <img src={poster2} alt="" />
              <button onClick={() =>scrollToSection(subscribe) } className="bg-[#C4942D] text-[#101010] w-[231px] h-[40px] rounded-full text-sm ml-[15%] md:ml-[15%]    ">
                        
                <p className=" font-medium" > Subscribe to our newsletter</p>
              </button>
          </div>


       {/* <------mobile----> */}

          <div className='px-[5%] md:py-[5%] md:hidden mx-auto ' data-aos="fade-down">
            <div>
                <img src={poster3} className='md:w-[750px] w-[95%] md:h-[750px] h-[900px] md:my-[15%] my-[15%] mx-auto' />
            </div>
            <div className=''> 
                <Link to="/">
                        <button onClick={() =>scrollToSection(subscribe) } className="bg-[#C4942D] text-[#101010] w-[80%] h-[50px] rounded-full text-md   md:mb-[0] mb-[5%] ml-[10%]  ">
                          
                          <p className=" font-bold" > Subscribe to our newsletter</p>
                        </button>
                </Link>
            </div>
        </div>
      </div>

     

    

    
    
  )
}

export default Poster