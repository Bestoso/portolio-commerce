import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import useLocoScroll from './hooks/useLocoScroll';
import './assets/css/App.css'
import { NavBar } from './Components/NavBar';
import { About } from './Components/About';

function App() {

  const appRef = useRef();
  useLocoScroll();

  return (
    <div className="App"
    ref={ appRef }
    data-scroll-container>
    
    <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path='/' element={ <Navigate to='/inicio' />} />
            <Route path='/inicio' element={ <Home />} />
            <Route path='/about-me' element={ <About />} />
            <Route path='/contact' element={ <Contact />} />
            <Route path='*' element={ <div> Error </div>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
