import { motion } from 'framer-motion'
import React from 'react'

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        className='contact__container'>
            <div className='main__text'>
                <p className='title'>Contact</p>
                <p className='sub'>Get in touch</p>
            </div>
            <div className='contact__form'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <textarea placeholder='Message' />
                <button>Send</button>
            </div>
        </motion.div>
    )
}
