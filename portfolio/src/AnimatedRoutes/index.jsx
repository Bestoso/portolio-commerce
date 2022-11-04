import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Home } from '../Components/Home';
import { AnimatePresence } from 'framer-motion'
import { Detail } from '../Components/Detail';
import { Cart } from '../Components/Cart';

export const AnimatedRoutes = () => {

    const location = useLocation();
    
    return (
        <AnimatePresence>
            <Routes location={ location } key={ location.pathname }>
                <Route path='/' element={ <Navigate to='/inicio' />} />
                <Route path='/inicio' element={ <Home />} />
                <Route path='/products/:id' element={ <Detail />} />
                <Route path='/about-me' element={ <About />} />
                <Route path='/contact' element={ <Contact />} />
                <Route path='/cart' element={ <Cart />} />
                <Route path='*' element={ <div> new Error </div>} />
            </Routes>
        </AnimatePresence>
    )
}
