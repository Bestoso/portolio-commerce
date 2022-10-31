import React from 'react'

const TextToRight = () => {
    return (
        <div className='text-right' data-scroll-section>
            <span className='right-text'
                data-scroll
                data-scroll-speed='-0.7'
                data-scroll-direction='horizontal'> Frontend Developer </span>
        </div>
    )
}

export const Bio = () => {
    return (
        <>
            <TextToRight />
            <div className='container'
            data-scroll-section>
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
                    </div>
                </div>
            </div>
        </>
    )
}
