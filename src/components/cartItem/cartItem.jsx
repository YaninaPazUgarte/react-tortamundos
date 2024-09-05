import Card from 'react-bootstrap/Card';
import style from "./styles.module.css"

const CartItem = ({ item }) => {
    console.log("redeployng")
    return(
        <Card className={style.card}>
        <Card.Img className={style.img} variant="top" src={item.image} />
        <Card.Body className={style.body}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {`$ ${item.price}`}
        </Card.Text>
        <Card.Text>
            {`Cantidad: ${item.quantity}`}
        </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default CartItem