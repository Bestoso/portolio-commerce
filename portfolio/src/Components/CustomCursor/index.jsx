import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useCursorContext } from '../../Context/CursorContext';

export const CustomCursor = () => {

    const { cursorVariant, setCursorVariant } = useCursorContext();

    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 })

    const variants = {
        default: {
            x: mousePosition.x + 1,
            y: mousePosition.y + 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: 'easeOut'
            }
        },
        text: {
            x: mousePosition.x -16,
            y: mousePosition.y -16,
            scale: 1.5,
        }
    }

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
    <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
    />
    )
}
