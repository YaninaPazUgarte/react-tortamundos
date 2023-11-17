import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import {collection, doc, getDoc, getDocs, query, where, limit } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import ItemList from "../../components/itemList/itemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])
    const {id} = useParams()

    useEffect(() => {
        const productsRef = collection(db, "products")

        if (id) {
            const q = query(productsRef, where("categoryId", "==", id))
            getDocs(q)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})))
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false))
        } else {
            getDocs(productsRef)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})))
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false))
        }
        
    }, [id])

    if (loading) return <Spinner />

    return (
        <ItemList products={products}/>
    )
    
}
        
    
export default ItemListContainer