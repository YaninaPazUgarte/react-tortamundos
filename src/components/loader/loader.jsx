import { Button } from "react-bootstrap";

const Loader = ({loading, setLoad}) => {
    return(
        <>
        {loading && <p>Hola soy el cargando del componente nuevo</p>}
        <Button onClick={() => setLoad(!loading)}></Button>
        </>
    )
}

export default Loader