import React from 'react'
import { BrowserRouter,Router,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pagenotfound from './components/pages/Pagenotfound';
import Menu from './components/pages/Menu';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/menu" element={<Menu/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="*" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
