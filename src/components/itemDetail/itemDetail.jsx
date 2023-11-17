import { useParams } from "react-router-dom"
import Counter from '../counter/counter'
import style from "./styles.module.css"


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
            </>
        ) : (
            <p>El producto con id:{id}no existe</p>
            

        )}
        </>
        
    )
}

export default ItemDetail