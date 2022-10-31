import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {

/*     const navigate = useNavigate();

    const [loaderClass, setLoaderClass] = useState('loader-first');
    const [loaderSecondClass, setLoaderSecondClass] = useState('loader-second');

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const loaderFirstTransition = () => {
        if (loaderClass === 'loader-first' && loaderSecondClass === 'loader-second'){
            setLoaderClass('loader-first active')
            setLoaderSecondClass('loader-second active')
        } else {
            setLoaderClass('loader-first');
            setLoaderSecondClass('loader-second')
        }
        setTimeout(() => {
            setLoaderClass('first-loader gone')
            setLoaderSecondClass('first-loader gone')
        }, 2000)
        setTimeout(() => {
            setLoaderClass('loader-first')
            setLoaderSecondClass('loader-second');
        }, 3500)
    }

    const navTo = (e) => {
        if (e.target.innerText === 'HOME'){
            loaderFirstTransition();
            setTimeout(() => {
                navigate('/')
            }, 1500)
        } else if (e.target.innerText === 'ABOUT ME'){
            loaderFirstTransition();
            setTimeout(() => {
                navigate('/about-me')
            }, 1500)
        } else {
            loaderFirstTransition();
            setTimeout(() => {
                navigate('/contact')
            }, 1500)
        }
    } */

    return (
        <>
            <div className='navBar-container'
                data-scroll-section>
                <header className='navBar' data-scroll>
                    <div className='navBar-logo'>
                        <p className='logo'> bestoso <span className='change'> &copy;2022</span></p>
                    </div>
                    <nav className='navBar-menu'>
                        <ul className='menu-list'>
                            <li className='list-item'>
                                <p className='item-link'>
                                    home
                                </p>
                            </li>
                            <li className='list-item'>
                                <p className='item-link'>
                                    about me
                                </p>
                            </li>
                            <li className='list-item'>
                                <p className='item-link'>
                                    contact
                                </p>
                            </li>
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
                    </nav>
                </header>
            </div>
        </>
    )
}
