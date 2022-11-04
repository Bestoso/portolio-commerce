import React from 'react'
import { Banner } from '../Banner'
import { Bio } from '../Bio'
import { Projects } from '../Projects'
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity: 1 }}
        exit={{ opacity: 0 }}
        className='home-container' data-scroll-section>
            <Banner />
            <Bio />
            <div></div>
            <Projects />
        </motion.div>
    )
}
