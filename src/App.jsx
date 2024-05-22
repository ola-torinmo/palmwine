import './App.css'
import Alpine from 'alpinejs'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Event from './pages/Event';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
// import Service from './pages/Service';
// import Project from './pages/Project';
// import QA from './pages/QA';

function App() {
  Alpine.start()

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/event' element={<Event />} />
            {/* <Route path='/service' element={<Service />} />
            <Route path='/project' element={<Project />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/qa' element={<QA />} /> */}
            
        </Routes>
      </Router>
      {/* how far ayobami when u have this code you should see this the best way to structure your code is to separate some components and pages
          the components folder will hold any component folder some components such as footer and navbar and some cards that are repititive 
          pages folder will hold all the routes that are in the folder i will help you with all the routes all you need is just to solve the ui
        
      */}
      {/* 
          for all the pages or components that you want to create make use of the .jsx extension for it to go well it has some benefits over using .js 

          always store the all the pictures in the public folder dont create another folder for pictures

      */}
    </div>

  )
}

export default App
