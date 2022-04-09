import React, { useState, useRef } from "react";
import { Button, Table } from "react-bootstrap";
import ExceptionModal from "../components/ExceptionModal";

const UserTable = ({ users, setUsers }) => {
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const idProductRef = useRef();

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };

  const handleDelete = (id) => {
    handleDialog("Are you sure you want to delete?", true);
    idProductRef.current = id;
  };

  const areYouSureDelete = (choose) => {
    if (choose) {
      setUsers(users.filter((p) => p.id !== idProductRef.current));
      handleDialog("", false);
      setDialog({
        message: "Are you sure you want to delete?",
        isLoading: false,
      });
    } else {
      handleDialog("", false);
    }
  };

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
                  <Button
                    className="button muted-button"
                    onClick={() => handleDelete(user.id)}
                  >
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

      {dialog.isLoading && (
        <ExceptionModal
          onDialog={areYouSureDelete}
          message={dialog.message}
          isLoading={dialog.isLoading}
        />
      )}
    </>
  );
};

export default UserTable;
