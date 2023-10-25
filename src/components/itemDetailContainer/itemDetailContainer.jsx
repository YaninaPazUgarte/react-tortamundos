import { useEffect, useState, useId } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams()
    console.log("ID", id)
    const [producto, setProducto] = useState()

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=> {
            setProducto(json)
            console.log(json)
        })
        .catch(error => console.error(error))
    }, [id])

    return (
        <>
        <h2>{producto?.title}</h2>
        <p>Description: {producto?.description}</p>
        </>
    )
}

export default ItemDetailContainer
