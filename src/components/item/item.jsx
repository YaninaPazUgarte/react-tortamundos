import styles from './styles.module.css'
import { Link } from 'react-router-dom';

const Item = ({id, title, price}) => {

    return(
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{price}</p>
            <Link to={`/item/${id}`}>Ver mas</Link>
        </div>
    )
}

export default Item