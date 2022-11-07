import { useContext, useState, createContext } from "react";
import Toastify from 'toastify-js'

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

    const [ quantity, setQuantity ] = useState(0);
    const [ cart, setCart ] = useState([]);
    const [ price, setPrice ] = useState(0);

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addItem = (item, quantity = 1) => {
        if (isInCart(item.id)){
            setCart(cart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem))
            setPrice(price + item.price * quantity);
            calcTotalItems();
            showMessage();
        } else {
            setCart([...cart, {...item, quantity}]);
            console.log([...cart, {...item, quantity}])
            setPrice(price + item.price * quantity);
            calcTotalItems();
            showMessage();
        }
    }

    const showMessage = () => {
        Toastify({
            text: "Item added to cart",
            duration: 1000,
            newWindow: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            stopOnFocus: true,
        }).showToast();	
    }

    const calcTotalItems = () => {
        setQuantity(cart.reduce((acc, item) => acc + item.quantity, 1));
    }

    const clearCart = (e) => {
        e.preventDefault();
        setCart([]);
        setPrice(0);
        setQuantity(0);
        Toastify({
            text: "Cart cleared",
            duration: 1000,
            newWindow: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
            stopOnFocus: true,
        }).showToast();
    }

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addItem,
            price,
            quantity,
            clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}