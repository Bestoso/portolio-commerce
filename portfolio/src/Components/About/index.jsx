import React from 'react'
import { motion } from 'framer-motion';
export const About = () => {    
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='about-section'
        data-scroll-section>
            About
        </motion.div>
    )
}
