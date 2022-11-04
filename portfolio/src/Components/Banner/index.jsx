import React from 'react'

export const Banner = () => {
    return (

        <section className='hero-container'>
            <div className='hero'>
                <div className='text-section' data-scroll
                data-scroll-speed='1'>
                    <h1 className='title'>
                        <span className='title-span first'> s.bestoso </span>
                        <span className='title-span second'> front developer. </span>
                    </h1>
                    <span className='based'>
                        <p className='based-p'> Web developer based in Argentina - Buenos Aires </p>
                    </span>
                    <p className='description'>
                        <span className='description-span'> I am really passionate about technology and programming. I like to create solutions and amazing web experiences. </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
