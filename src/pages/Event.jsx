import React ,{useEffect} from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import  Slider  from '../components/Slider'
import Poster from '../components/Poster'
import { ScrollProvider } from '../components/ScrollContext';
import Newsletter from '../components/Newsletter'
import  Footer  from '../components/Footer'
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
import { useLocation } from 'react-router-dom';




function Event() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Use a timeout to ensure the scroll happens after the component mounts
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      }
    }
  }, [location]);

  return (
    <>
    <ScrollProvider>
      
      <Navbar/>
      <Slider
      img1={e1}
      img2={e2}
      img3={e3}
      img4={e4}
      img5={e5}
      img6={e6}
      img7={e7}
      img8={e8}
      img9={e9}
      img10={e10}
      img11={e11}
      img12={e12}
      img13={e13}
      img14={e14}
      img15={e15}
      img16={e16}/>
      <Poster/>
      <Newsletter id="target-component"/>
      <Footer/>

      </ScrollProvider>
    </>
  )
}


export default Event;