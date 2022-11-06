import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCursorContext } from '../../Context/CursorContext'

const TextToRight = () => {

    const [transform, setTransform] = useState(0)

    const handleScroll = () => {
        window.addEventListener('scroll', () => {
            setTransform(window.scrollY / 12)
        })
    }

    useEffect(() => {
        handleScroll();
    }, [])
    


    return (
        <div className='text-right animate__animated animate__fadeIn'>
            <span className='right-text' style={{
                transform: `translateX(${transform}px)`,
            }}> Frontend Developer </span>
        </div>
    )
}

export const Bio = () => {

    const { textEnter, textLeave } = useCursorContext();

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
                                <p
                                    className='text'
                                    onMouseEnter={textEnter}
                                    onMouseLeave={textLeave}>
                                    Learn More
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
