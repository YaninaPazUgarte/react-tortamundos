import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import StyledForm from "../styledForm/styledForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import { Button, Alert } from "react-bootstrap";


const Order = () => {
const { totalMoney, cartItem, clearCart } = useContext(CartContext);
const [showAlert, setShowAlert] = useState(false);
const [orderId, setOrderId] = useState(null);

const createOrder = () => {
    const order = {
        buyer: {
            name: 'Ani Ugarte',
            phone: '2494123123',
            email: 'x@gmail.com',
        },
        items: cartItem,
        total: totalMoney
    };

    const refOrder = collection(db, 'orders');
    addDoc(refOrder, order)
        .then(({ id }) => {
            console.log(id);
            setOrderId(id);
            setShowAlert(true);
            clearCart();
    })
        .ctach(error=> {
            console.error("Error al agregar el pedido:", error);
    });
    };
    
    const handleCloseAlert = () => {
        setShowAlert(false);    
    };
    
    return(
        <div>
            {totalMoney}
            <StyledForm />
            <Button onClick={createOrder}>Finalizar compra</Button>
            <Alert show={showAlert} variant="success" onClose={handleCloseAlert} dismissible>
                <Alert.Heading>Pedido creado con éxito</Alert.Heading>
                <p>¡Gracias por tu compra! Tu número de pedido es: {orderId}</p>
            </Alert>
        </div>
    );
};

export default Order