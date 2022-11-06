import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { About } from '../About';
import { Home } from '../ItemListContainer';
import { AnimatePresence } from 'framer-motion'
import { Detail } from '../DetailContainer';
import { Cart } from '../Cart';
import { Contact } from '../Contact';

export const AnimatedRoutes = () => {

    const location = useLocation();
    
    return (
        <AnimatePresence>
            <Routes location={ location } key={ location.pathname }>
                <Route path='/' element={ <Navigate to='/inicio' />} />
                <Route path='/portolio-commerce/' element={ <Navigate to='/inicio' />} />
                <Route path='/inicio' element={ <Home />} />
                <Route path='/products/:id' element={ <Detail />} />
                <Route path='/about-me' element={ <About />} />
                <Route path='/contact' element={ <Contact />} />
                <Route path='/cart' element={ <Cart />} />
                <Route path='*' element={ <div> Site is currently in development... Sorry!</div>} />
            </Routes>
        </AnimatePresence>
    )
}
