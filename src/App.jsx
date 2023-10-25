import NavBar from './components/navBar/navBar'
import ItemListContainer from './container/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import  ProductsContainer  from './components/productsContainer/productsContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductsCategoryContainer from './components/productsCategoryContainer/productsCategoryContainer'

function App() {
 
  return (
    <>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route exact path="/" element={ <ProductsContainer />}/>
          <Route exact path="/category/:name" element={ <ProductsCategoryContainer  /> }/>
          <Route exact path="/item/:id" element={ <ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
