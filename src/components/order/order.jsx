import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import StyledForm from "../styledForm/styledForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import { Button } from "react-bootstrap";

const Order = () => {
const { totalMoney, cartItem } = useContext(CartContext)

const createOrder = () => {
    const order = {
        buyer: {
            name: 'Ani Ugarte',
            phone: '2494123123',
            email: 'x@gmail.com',
        },
        items: cartItem,
        total: totalMoney
    }
const refOrder = collection(db, 'orders')
addDoc(refOrder, order).then(({ id }) => console.log(id))

}
    return(
        <div>
            {totalMoney}
            <StyledForm />
            <Button onClick={createOrder}>Finalizar compra</Button>
        </div>
    )
}

export default Order