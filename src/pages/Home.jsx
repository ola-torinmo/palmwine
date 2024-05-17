import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Jumbotron  from '../components/Jumbotron'
import Meet from '../components/Meet'
import  Edition  from '../components/Edition'
import  Footer  from '../components/Footer'



function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Jumbotron/>
      <Meet/>
      <Edition/>
      <Footer/>
    </>
  )
}


export default Home;