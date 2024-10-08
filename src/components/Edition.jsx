import React,{ useEffect }  from 'react'
import edi1 from '../assets/1.png'
import edi2 from '../assets/2.png'
import edi3 from '../assets/3.png'
import edi4 from '../assets/4.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';


const Edition = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]) 

  return (
    <div className='w-full bg-[#FDC448] flex justify-center'>
      <div className='pt-[20px]'>
        <div className='text-center pb-[40px]'>
          <h1 className='md:text-[50px] text-[30px] mb-5'>The PalmTree</h1>
          <p className='text-[16px] w-[90%] mx-auto'>The PalmTree is wherever our community is. Everyone is welcome! JUST BE GOOD VIBES!! </p>
        </div>
        <div className='md:flex pb-[40px]  '>
          <img src={edi1} alt="" className='md:mb-[0%] mb-[7%] md:mr-6 md:w-[285px] w-[90%] md:ml-[0%] ml-[5%]' data-aos="fade-up" />
          <img src={edi2} alt="" className='md:mb-[0%] mb-[7%] md:mr-6 md:w-[285px] w-[90%] md:ml-[0%] ml-[5%]' data-aos="fade-up" />
          <img src={edi3} alt="" className='md:mb-[0%] mb-[7%] md:mr-6 md:w-[285px] w-[90%] md:ml-[0%] ml-[5%]' data-aos="fade-up" />
          <img src={edi4} alt="" className='md:w-[285px] w-[90%] md:ml-[0%] ml-[5%]' data-aos="fade-up" />
        </div>
        <div className='grid justify-items-center pb-[30px]'>
        <Link to="/palmtree">
                    <button className="bg-black text-white w-[169px] h-[53px] rounded-full text-md text-normal text-center">
                       
                       <p className="" >Find more here</p>
                    </button>
                </Link>
        </div>

      </div>

      
    </div>
  )
}

export default Edition