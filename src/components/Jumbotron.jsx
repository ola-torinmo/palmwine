import React from 'react'
import jumbo from '../assets/jumbo.png'
// import Aos from 'aos'
// import 'aos/dist/aos.css'

const Jumbotron = () => {
  // useEffect(()=>{
  //   Aos.init({duration: 2000});
  // },[])

  return (
    <div className='md:mt-[34%] mt-[40%]'>
        <img src={jumbo} className='w-full bg-gray-500 bg-blend-multiply object-cover ' />
    </div>
  )
}

export default Jumbotron