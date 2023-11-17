import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cartItem/cartItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <>
      {cartItem.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Link to={"/order"}>
        <Button>Ordenar</Button>
      </Link>
    </>
  );
};

export default CartView;
