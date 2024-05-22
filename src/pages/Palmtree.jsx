import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import  Slider  from '../components/Slider'
import PTposter from '../components/PTposter'
import  Footer  from '../components/Footer'

const Palmtree = () => {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Slider/>
      <PTposter/>
      <Footer/>
    </>
  )
}

export default Palmtree