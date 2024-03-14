import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";

function Register() {
  return (
    <div className="form-container">
      <h1>Registrate</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrate
      </Button>
      <p>
        ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
      </p>
    </Form>
    </div>
  );
}

export default Register;
