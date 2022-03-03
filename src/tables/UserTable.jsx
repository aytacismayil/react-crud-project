import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";

const UserTable = ({ users, deleteUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first}</td>
                <td> {user.last} </td>
                <td>{user.username}</td>
                <td>
                  <Button className="button muted-button" onClick={handleShow}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>data not fount</tr>
          )}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button
            variant="primary"
            onClick={() => {
              deleteUser(user.id);
              handleClose(true);
            }}
          >
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserTable;
