import Form from 'react-bootstrap/Form';

const StyledForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type="text" placeholder="Ani Ugarte" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" placeholder="2494123123" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    </Form>
  );
}

export default StyledForm