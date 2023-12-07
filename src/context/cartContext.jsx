import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartComponentContext = ({children}) => {

    const [cartItem, setCartItem] = useState ([])
    const [totalItems, setTotalItems] = useState (0)
    const [totalMoney, setTotalMoney] = useState(0)

    const getTotal = () => {
        const result = cartItem.reduce((total, currentItem) => total + (currentItem.quantity * currentItem.price), 0);
    setTotalMoney(result)
}

    const clearCart = () => {
        setCartItem([]);
        setTotalItems(0);
        setTotalMoney(0);
    };

    useEffect(() => {
        getTotal()
    }, [cartItem])
    
    return(
        <CartContext.Provider value={{cartItem, setCartItem, totalItems, setTotalItems, totalMoney, clearCart}}>
            {children}
        </CartContext.Provider> 
    )
}

export default CartComponentContext