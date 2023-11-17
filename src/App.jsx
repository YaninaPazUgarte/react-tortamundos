import NavBar from './components/navBar/navBar'
import ItemListContainer from './container/ItemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/footer'
import CartComponentContext from './context/cartContext'
import CartView from './components/cartView/cartView'
import Order from './components/order/order'
function App() {

  return (
    <>
      <CartComponentContext>
        <BrowserRouter> 
          <NavBar/>
        
          <Routes>
            <Route exact path="/" element={ <ItemListContainer />}/>
            <Route exact path="/category/:id" element={ <ItemListContainer  /> }/>
            <Route exact path="/item/:id" element={ <ItemDetailContainer/> }/>
            <Route exact path="/cart" element={ <CartView/> }/>
          <Route exact path="/order" element={ <Order/> }/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartComponentContext>  
        
    </>
    
  )
}


export default App
