import Badge from 'react-bootstrap/Badge';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/cartContext";
import { useContext, useState } from 'react';
import style from './styles.module.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalItems} = useContext(CartContext)

    return (
        <Link to={`/cart`}>
            <Badge className={style.cart} bg="secondary"><AiOutlineShoppingCart/>{totalItems}</Badge>    
        </Link>
    )
}

export default CartWidget 