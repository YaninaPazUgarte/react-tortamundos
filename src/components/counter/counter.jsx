import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import style from "./styles.module.css"


const Counter = ({product}) => {
    const [counter, setCounter] = useState(1)
    const {cartItem, setCartItem, totalItems ,setTotalItems} = useContext(CartContext)
    const stock = 10

    const suma = () => {
        
        if(counter <= product.stock){
            const existingItemIndex = cartItem.findIndex(item => item.id === product.id);
            setCounter(counter + 1);
            setTotalItems(totalItems + 1);
            if (existingItemIndex !== -1) {
                
                const updatedCart = [...cartItem];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + 1,
                    
                };
            
                setCartItem(updatedCart);
            } else {
                
                setCartItem([...cartItem, {
                    quantity: 1, // Initial quantity
                    title: product.title,
                    image: product.image,
                    id: product.id,
                    price: product.price,
                }]);
            }
        }
        
    };

    const resta = () => {
        if(counter >= 1 ) {
            const existingItemIndex = cartItem.findIndex(item => item.id === product.id);
            if (existingItemIndex === -1) {
                return;
            } else {
                setCounter(counter - 1);
                setTotalItems(totalItems - 1);
                
                const updatedCart = [...cartItem];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity > 0 
                        ? updatedCart[existingItemIndex].quantity - 1 
                        : 0,
                    
                };
                setCartItem(updatedCart);
            }
        }
    }
    console.log(JSON.stringify(cartItem))

    return(
        <div className={style.counter}>
            <Button variant="info" size="sm" onClick={resta}><p classname={style.button}>-</p></Button>
            <p classname={style.p}>{counter -1}</p>
            <Button variant="info" size="sm" onClick={suma}><p classname={style.button}>+</p></Button>
        </div>
    )

}

export default Counter