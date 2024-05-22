import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import  Footer  from '../components/Footer'
import PTabout  from '../components/PTabout'

const About = () => {
  return (
    <>
    <Navbar/>
    <PTabout/>
    <Newsletter/>
    <Footer/>
  </>
  )
}

export default About