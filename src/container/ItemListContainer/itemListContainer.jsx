import {useEffect, useState} from "react"
import Item from "../../components/item/item"
import { useParams } from "react-router-dom"

const ItemListContainer = ({products}) => {

    const promesa = new Promise((resolve,reject) =>{
        {/*const productosArray = [
            {name: "Torta", precio: 3000, id:1},
            {name: "Postre", precio: 4000, id:2},
            {name: "Alfajor", precio: 2000, id:3},
            {name: "Crema", precio: 1000, id:4},
        ]*/}
        setTimeout(() => {
            products.length > 0 ? resolve(products) : reject({data: [], massage: "no hay productos"})
        }, 5000)
    })

    useEffect(() => {
        promesa
        .then(res => (res))
        .catch(error => console.error(error.massage))
    }, [])

    return (
        <>
        {products.length > 0 ? (
            <>
            {products.map(prod => <Item key={prod.id} title={prod.title} price={prod.price} id={prod.id}/>)}
            </>
        ) : (
            <p>Cargando...</p>
        )}
        </>
    )
}

export default ItemListContainer