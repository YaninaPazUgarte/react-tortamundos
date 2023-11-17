import { Link } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";
import style from './styles.module.css'


const Item = ({id, title, price, image}) => {

    const sumar = () => {
        setNumero(numero + 1)
    }

    return(
            
        <Card className={style.card}>
            <Card.Img className={style.img} src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button className={style.button}>Ver mas</Button>
                    </Link>
            </Card.Body>
        </Card>       
        
    )

}

export default Item