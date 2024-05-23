import React from 'react'
import '../components/slider.css'
import e1 from '../assets/e1.png'
import e2 from '../assets/e2.png'
import e3 from '../assets/e3.png'
import e4 from '../assets/e4.png'
import e5 from '../assets/e5.png'
import e6 from '../assets/e6.png'
import e7 from '../assets/e7.png'
import e8 from '../assets/e8.png'
import e9 from '../assets/e9.png'
import e10 from '../assets/e10.png'
import e11 from '../assets/e11.png'
import e12 from '../assets/e12.png'
import e13 from '../assets/e13.png'
import e14 from '../assets/e14.png'
import e15 from '../assets/e15.png'
import e16 from '../assets/e16.png'


const Slider = () => {

  return (

    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    class="w-full inline-flex flex-nowrap overflow-hidden py-[2.5%]">
    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src={e1} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={e2} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={e3} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
             <img src={e4} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={e5} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e6} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e7} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={e8} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e9} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e10} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e11} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e12} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e13} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e14} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e15} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={e16} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
    </ul>
    
</div>
  );
}

export default Slider