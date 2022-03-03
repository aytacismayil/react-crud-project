import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUserForm = (props) => {
  const { addUser } = props;
  const initialFormState = { id: null, first: "", last: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!user.first || !user.username || !user.last) return;
    addUser(user);
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
            value={user.first}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="last"
            onChange={handleInputChange}
            value={user.last}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleInputChange}
            value={user.username}
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
