import NavBar from './components/navBar/navBar'
import ItemListContainer from './container/ItemListContainer/itemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Tortamundos"/>
    </>
  )
}


export default App
