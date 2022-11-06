import React from 'react'
import { Link } from 'react-router-dom'

const TextToRight = () => {
    return (
        <div className='text-right animate__animated animate__fadeIn'>
            <span className='right-text'> Frontend Developer </span>
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
                            <span className='name animate__animated animate__fadeIn'> Santiago Bestoso </span>
                            <span className='age animate__animated animate__fadeIn'> 19 years </span>
                        </h3>
                        <div className='bio-info'>
                            <p className='info animate__animated animate__fadeIn'>
                                Borned in 2003 at Argentina, Corrientes. Always showed interest technology and art. Started studying at the age of 18 mastering a lof of frontend development technologies - skills. Always looking up to keep learning and improve my creativity!
                            </p>
                        </div>
                        <div className='bio-buttons animate__animated animate__fadeIn'>
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
