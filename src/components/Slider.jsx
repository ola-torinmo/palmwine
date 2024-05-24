import React from 'react'
import '../components/slider.css'

const Slider = (props) => {

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
            <img src={props.img1} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={props.img2} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={props.img3} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
             <img src={props.img4} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={props.img5} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img6} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img7} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]' />
        </li>
        <li>
            <img src={props.img8} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img9} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img10} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img11} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img12} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img13} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img14} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img15} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
        <li>
            <img src={props.img16} className='md:w-[500px] md:h-[371px] w-[400px] h-[291px]'/>
        </li>
    </ul>
    
</div>
  );
}

export default Slider