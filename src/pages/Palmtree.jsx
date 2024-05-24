import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import  Slider  from '../components/Slider'
import PTposter from '../components/PTposter'
import  Footer  from '../components/Footer'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import p11 from '../assets/p11.png'
import p12 from '../assets/p12.png'
import p13 from '../assets/p13.png'
import p14 from '../assets/p14.png'
import p15 from '../assets/p15.png'
import p16 from '../assets/p16.png'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import t4 from '../assets/t4.png'
import t5 from '../assets/t5.png'
import t6 from '../assets/t6.png'
import t7 from '../assets/t7.png'
import t8 from '../assets/t8.png'
import t9 from '../assets/t9.png'
import t10 from '../assets/t10.png'
import t11 from '../assets/t11.png'
import e14 from '../assets/e14.png'
import e15 from '../assets/e15.png'
import e16 from '../assets/e16.png'
const Palmtree = () => {
  return (
    <>
      <Navbar/>
      <Slider
      img1={p1}
      img2={p2}
      img3={p3}
      img4={p4}
      img5={p5}
      img6={p6}
      img7={p7}
      img8={p8}
      img9={p9}
      img10={p10}
      img11={p11}
      img12={p12}
      img13={p13}
      img14={p14}
      img15={p15}
      img16={p16}/>
      <Slider
      img1={t1}
      img2={t2}
      img3={t3}
      img4={t4}
      img5={t5}
      img6={t6}
      img7={t7}
      img8={t8}
      img9={t9}
      img10={t10}
      img11={t11}
      
      img12={p12}
      img13={p13}
      img14={e14}
      img15={e15}
      img16={e16}/>
      <PTposter/>
      <Footer/>
    </>
  )
}

export default Palmtree