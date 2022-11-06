import React, { useContext, useRef } from 'react'
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useThemeContext } from '../../Context/ThemeContext';
import { useLocation } from 'react-router-dom';
import Toastify from 'toastify-js';

export const Cart = () => {

    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const { cart, price, clearCart } = useContext(CartContext);

    const formValidation = (e) => {
        e.preventDefault();
        const regExps = {
            name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            phone: /^\d{7,14}$/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }
        if (!regExps.name.test(nameRef.current.value)) {
            Toastify({
                text: "Please enter a valid name",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
                stopOnFocus: true,
            }).showToast();
        } else if (!regExps.phone.test(phoneRef.current.value)) {
            Toastify({
                text: "Please enter a valid phone number",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
                stopOnFocus: true,
            }).showToast();
        } else if (!regExps.email.test(emailRef.current.value)) {
            Toastify({
                text: "Please enter a valid email",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
                stopOnFocus: true,
            }).showToast();
        } else {
            generateOrder(e);
            clearCart();
            Toastify({
                text: "Order sent successfully",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                stopOnFocus: true,
            }).showToast();
        }
    }



    const generateOrder = async (e) => {
        const newOrder = {
            buyer: {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value
            },
            items: cart.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity
                }
            }),
            total: price
        }

        const db = getFirestore();
        const orders = collection(db, 'orders');
        const addNewOrder = await addDoc(orders, newOrder);
    }

    return (
        <div className='cart__container'>
        <div className='main__text'>
            <p className='title'> Get in touch </p>
            <p className='sub'> Lets start our Journey</p>
        </div>
        <div className='cart__form'>
            <div className='order__container'>
                {
                    cart.map((item, key) => (
                        <div key={ key } className='order__text'>
                            <p className='title'>Product: { item.title }</p>
                            <p className='price'>Price: ${ item.price }</p>
                            <p className='quantity'>Quantity: { item.quantity }</p>
                        </div>
                    ))
                }
                <p className='total-price'>Total price: ${ price } </p>
            </div>
            <div className='form__container'>
                <form>
                    <input type="text" name="name" placeholder="Name" ref={nameRef}/>
                    <input type="text" name="phone" placeholder="Phone" ref={phoneRef} />
                    <input type="text" name="email" placeholder="Email"ref={emailRef} />
                    <div className='button__container'>
                        <button className='button' type="submit" onClick={ formValidation }> Confirm </button>
                        <button className='button' onClick={ clearCart }> Cancel </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
