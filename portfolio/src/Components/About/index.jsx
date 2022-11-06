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
            <div className='main-container'>
                <div className='about-container'>
                    <span className='about'>about</span>
                    <span className='me'>me</span>
                </div>
                <div className='about-text'>
                    <p className='title'>
                        Hi I am Santiago, developer
                    </p>
                    <p className='text'>
                        The Journey began a day when I was 18 years old, I had a friend who was a developer and I was very interested in technology and I wanted to learn more about it, I started learning programming and I fell in love with it, I have been programming for almost a year, I have worked with different technologies and I have learned a lot, I am passionate about what I do and I am always learning new things.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
