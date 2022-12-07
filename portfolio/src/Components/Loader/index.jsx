import React from 'react'
import './style.css'

export const Loader = () => {
    return (
        <div className='loader__container'>
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    )
}