import './App.css'
import Alpine from 'alpinejs'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Event from './pages/Event';
import Palmtree from './pages/Palmtree';
import About from './pages/About';


function App() {
  Alpine.start()

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/event' element={<Event />} />
            <Route path='/palmtree' element={<Palmtree />} />
            <Route path='/about' element={<About />} />
            
        </Routes>
      </Router>
      
    </div>

  )
}

export default App
