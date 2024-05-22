import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import  Slider  from '../components/Slider'
import Poster from '../components/Poster'
import Newsletter from '../components/Newsletter'
import  Footer  from '../components/Footer'



function Event() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Poster/>
      <Newsletter/>
      <Footer/>
    </>
  )
}


export default Event;