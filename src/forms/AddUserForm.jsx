import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUserForm = () => {
  const initialFormState = { id: null, name: "", last: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!user.name || !user.username) return;
    // addUser(user);
    setUser(initialFormState);
  };

  return (
    <div className="mb-4 mt-4">
      <h1>CRUD App with Hooks</h1>
      <Form onSubmit={onSubmitHandle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="first"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="last"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add new user
        </Button>
      </Form>
    </div>
  );
};

export default AddUserForm;
