import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const Cart = () => {

    const { cart, setCart, price } = useContext(CartContext);

    const generateOrder = async (e) => {
        e.preventDefault();
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

        console.log(addNewOrder);
        console.log(newOrder)
    }

    console.log(cart)
    return (
        <div>
            {
                cart.map((item, key) => (
                    <div key={ key }>
                        <p>{ item.title }</p>
                        <p>{ item.price }</p>
                        <p>{ item.quantity }</p>
                    </div>
                ))
            }
            <p> { price } </p>
            <form onSubmit={ generateOrder }>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="phone" placeholder="Phone" />
                <input type="text" name="email" placeholder="Email" />
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}
