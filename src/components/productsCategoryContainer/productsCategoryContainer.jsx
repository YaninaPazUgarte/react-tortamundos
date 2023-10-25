import { useEffect, useState } from "react"
import ItemListContainer from "../../container/ItemListContainer/itemListContainer"
import { useParams } from "react-router-dom"

const ProductsCategoryContainer = () => {
    const [allProducts, setAllProducts] = useState([])
    const {name} = useParams()

    useEffect(()=> {   
        fetch(`https://fakestoreapi.com/products/category/${name}`)
            .then(res=>res.json())
            .then(json=>setAllProducts(json))  
    })

    return (
        <ItemListContainer products={allProducts}/>
    )
}
export default ProductsCategoryContainer