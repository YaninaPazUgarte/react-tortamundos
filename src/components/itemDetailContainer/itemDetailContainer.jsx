import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import Loader from "../loader/loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const productRef = doc(db, "products", id)
        getDoc(productRef)
        .then(snapshot => {
            if(snapshot.exists()){
                setProducto({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            }
        })
        .catch(e =>console.error(e))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <>
            {loading ? (
                <Loader loading={loading}/>
            ) : (
                <ItemDetail producto={producto}/>
            )}
        </>
    )
}

export default ItemDetailContainer
