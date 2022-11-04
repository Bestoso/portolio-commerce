import React from 'react'
import { useThemeContext } from '../../Context/ThemeContext'

export const Footer = () => {

    const { bgColor } = useThemeContext();

    return (
        <div
            className={'footer ' + bgColor}>

            <div className='text'>
                <p className='developed'> Web developed by Santiago Bestoso </p>
            </div>
            <div className='socials'>
                <ul className='menu'>
                    <li className='list-item'>
                        <i className='bx bxl-twitter'></i>
                    </li>
                    <li className='list-item'>
                        <i className='bx bxl-instagram-alt' ></i>
                    </li>
                    <li className='list-item'>
                        <i className='bx bxl-github' ></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
