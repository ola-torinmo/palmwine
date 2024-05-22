import React from 'react'
import poster from '../assets/poster.png'

const PTposter = () => {
  return (
    <div>
        <div className='   px-[5%] py-[5%] '>
            <h1 className='text-white text-center text-[75px] mb-5'>Don’t be told, be there!</h1>
            <div>
                <img src={poster} className='w-[750px] h-[750px] mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default PTposter