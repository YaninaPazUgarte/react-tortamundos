import { useParams } from "react-router-dom"
import Counter from '../counter/counter'
import style from "./styles.module.css"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const ItemDetail = ({producto}) => {
    const {id} = useParams()

    return(
        <>
        {producto ? (
            <>
                <h3>{producto?.title}</h3>
                <p>Descripcion: {producto?.description}</p>
                <img className={style.img} src={producto?.image} />
                <Counter product={producto}/>
                <Link to={"/cart"}>
                    <Button>Agregar al carrito</Button>
                </Link>
            </>
        ) : (
            <p>El producto con id:{id}no existe</p>
            

        )}
        </>
        
    )
}

export default ItemDetail