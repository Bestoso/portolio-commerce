import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useThemeContext } from '../../Context/ThemeContext';
import { useCartContext } from '../../Context/CartContext';

export const Detail = () => {

    const [ productDetail, setProductDetail ] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    const { bgColor, setBgColor } = useThemeContext();
    const { cart, addItem } = useCartContext();

    let locationArr = location.pathname.split('/');
    let actualLocation = locationArr[2];

    const getOneProduct = async () => {
        const db = getFirestore();
        const q = query(collection(db, 'products'),
        where('id', '==', id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setProductDetail(doc.data());
        });
    }

    const onAdd = () => {
        addItem(productDetail, 1);
    }

    const locationBasedBg = () => {
        if (actualLocation === 'SWP'){
            setBgColor('rose')
        } else if (actualLocation === 'WPD'){
            setBgColor('lightblue')
        } else if (actualLocation === 'SPA'){
            setBgColor('dark')
        } else if (actualLocation === 'CWP'){
            setBgColor('blue')
        } else {
            setBgColor('default')
        }
    }

    useEffect(() => {
        getOneProduct();
        locationBasedBg();
    }, [])

    return (
        <div className={'detail__container ' + bgColor }>
        {
            <div className='detail'>
                <div className='text__container'>
                    <p className='title'> { productDetail.title } </p>
                    <p className='subtitle'> { productDetail.subtitle } </p>
                    <p className='category'> { productDetail.category } </p>
                    <p className='buy'
                    id={ productDetail.id }
                    onClick={ onAdd }>
                        <span className='text-up'>Begin the work</span>
                    </p>
                </div>
                <div className='cont'></div>
                <div className='image__container'>
                    <img className='image' src={ productDetail.detailImage } />
                </div>
            </div>
        }
        </div>
    )
}
