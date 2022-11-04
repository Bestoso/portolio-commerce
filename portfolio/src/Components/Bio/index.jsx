import React from 'react'
import { Link } from 'react-router-dom'

const TextToRight = () => {
    return (
        <div className='text-right'>
            <span className='right-text'
                data-scroll
                data-scroll-direction='horizontal'
                data-scroll-speed='-1'
            > Frontend Developer </span>
        </div>
    )
}

export const Bio = () => {
    return (
        <>
            <TextToRight />
            <div className='container'>
                <div className='bio-container'
                    >
                    <div className='space'></div>
                    <div className='bio'>
                        <h3 className='bio-title'>
                            <span className='name'> Santiago Bestoso </span>
                            <span className='age'> 19 years </span>
                        </h3>
                        <div className='bio-info'>
                            <p className='info'>
                                Borned in 2003 at Argentina, Corrientes. Always showed interest technology and art. Started studying at the age of 18 mastering a lof of frontend development technologies - skills. Always looking up to keep learning and improve my creativity!
                            </p>
                        </div>
                        <div className='bio-buttons'>
                            <Link to='/about-me'>
                                <span className='circle'></span>
                                <p className='text'>Learn More </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
