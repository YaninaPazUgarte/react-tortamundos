import { useEffect, useState } from "react"
import ItemListContainer from "../../container/ItemListContainer/itemListContainer"

const ProductsContainer = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(()=> {   
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setAllProducts(json))    
    })

    return (
        <ItemListContainer products={allProducts}/>
    )
}
export default ProductsContainer