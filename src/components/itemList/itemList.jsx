import Item from "../item/item"
import style from "./styles.module.css"

const ItemList = ({products}) => {
    return (
        <div className={style.container}>
            {products.map(prod => <Item key={prod.id} title={prod.title} price={prod.price} id={prod.id} image={prod.image} />)}
        </div>
    )
}


export default ItemList