import { useContext, useState, createContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

    const [ quantity, setQuantity ] = useState(0);
    const [ cart, setCart ] = useState([]);
    const [ price, setPrice ] = useState(0);

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(
                cart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem))
                calcItemsTotalPrice();
            calcTotalItems();
        } else {
            setCart([...cart, {...item, quantity}]);
            calcItemsTotalPrice();
            calcTotalItems();
        }
    }

    const calcItemsTotalPrice = () => {
        const quantityMoreThanOne = cart.map(item => item.quantity > 0 ? item.price * item.quantity : item.price);
        const totalPrice = quantityMoreThanOne.reduce((acc, item) => acc + item, 0);
        setPrice(totalPrice);
        console.log(totalPrice)
    }

    const calcTotalItems = () => {
        setQuantity(cart.reduce((acc, item) => acc + item.quantity, 1));
        alert(quantity)
    }

    const incrementQuantity = (id) => {
        setCart(
            cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
        )
        calcItemsTotalPrice();
        calcTotalItems();
    }

    const decrementQuantity = (id) => {
        if (cart.find(item => item.id === id).quantity > 1){
        setCart(
            cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
        )}
        calcItemsTotalPrice();
        calcTotalItems();
    }

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addItem,
            price,
            quantity
        }}>
            { children }
        </CartContext.Provider>
    )
}