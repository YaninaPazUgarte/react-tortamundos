import { createContext, useEffect, useState, useContext } from "react";

export const CartContext = createContext();

const CartComponentContext = ({children}) => {

    const [cartItem, setCartItem] = useState ([])
    const [totalItems, setTotalItems] = useState (0)
    const [totalMoney, setTotalMoney] = useState(0)

    const getTotal = () => {
        const result = cartItem.reduce((total, currentItem) => total + (currentItem.quantity * currentItem.price), 0);
setTotalMoney(result)
}

    useEffect(() => {
        getTotal()
    }, [cartItem])
    
    return(
        <CartContext.Provider value={{cartItem, setCartItem, totalItems, setTotalItems, totalMoney}}>
            {children}
        </CartContext.Provider> 
    )
}

export default CartComponentContext