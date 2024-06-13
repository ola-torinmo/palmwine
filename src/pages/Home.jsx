import React ,{useState, useEffect} from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Jumbotron  from '../components/Jumbotron'
import Meet from '../components/Meet'
import  Edition  from '../components/Edition'
import  Footer  from '../components/Footer'
import Modal from '../components/modal'



function Home() {
  const [showModal, setShowModal] = useState(false);

  // Optional: Automatically open the modal after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
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