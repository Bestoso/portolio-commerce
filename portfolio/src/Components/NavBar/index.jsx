import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../Context/ThemeContext';
import { useCartContext } from '../../Context/CartContext';
import { useCursorContext } from '../../Context/CursorContext';

export const NavBar = () => {

    const location = useLocation();
    const { bgColor, setBgColor } = useThemeContext();
    const { cart, quantity } = useCartContext();
    const { textEnter, textLeave } = useCursorContext();

    const setToDefault = () => {
        if (location.pathname !== '/products/'){
            setBgColor('default')
        }
    }

    useEffect(() => {
        setToDefault();
    }, [location])

    return (
        <>
            <div className={'navBar-container ' + bgColor}
            data-scroll-section
            data-scroll>
                <header className={'navBar ' + bgColor}>
                    <div className='navBar-logo'>
                        <p className='logo'> bestoso <span
                            className='change'
                            onMouseEnter={textEnter}
                            onMouseLeave={textLeave}> &copy;2022</span></p>
                    </div>
                    <nav className='navBar-menu'>
                        <ul className='menu-list'>
                            <li className='list-item'>
                                <NavLink
                                    to='/inicio'
                                    onMouseEnter={textEnter}
                                    onMouseLeave={textLeave}
                                    className={'item-link ' + bgColor}>
                                    home
                                </NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink
                                    to='/about-me'
                                    onMouseEnter={textEnter}
                                    onMouseLeave={textLeave}
                                    className={'item-link ' + bgColor}>
                                    about me
                                </NavLink>
                            </li>
                            <li className={'list-item ' + bgColor}>
                                <NavLink 
                                    to='contact'
                                    onMouseEnter={textEnter}
                                    onMouseLeave={textLeave}
                                    className={'item-link ' + bgColor}>
                                    contact
                                </NavLink>
                            </li>
                            <li className='list-item'>
                                <i className={'bx bxl-twitter ' + bgColor }></i>
                            </li>
                            <li className='list-item'>
                                <i className={'bx bxl-instagram-alt ' + bgColor}></i>
                            </li>
                            <li className='list-item'>
                                <i className={'bx bxl-github ' + bgColor}></i>
                            </li>
                            {
                                cart.length > 0 &&
                                <li className='list-item'>
                                    <NavLink
                                        to='/cart'
                                        onMouseEnter={textEnter}
                                        onMouseLeave={textLeave}
                                        className={'item-link ' + bgColor}>
                                        <i className={'bx bx-cart ' + bgColor}></i>
                                        <span className='cart-quantity'>{ quantity }</span>
                                    </NavLink>
                                </li>
                            }
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}
