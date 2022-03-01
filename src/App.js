import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const usersData = [
    { id: 1, name: "Aytaj", last: "Ismayil", username: "@iaytaj" },
    { id: 2, name: "Fatma", last: "Memmedova", username: "@m_fatma" },
    { id: 3, name: "Aisa", last: "Suleymanova", username: "@aisa" },
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <Container fluid>
      <Row>
        <Col>
          <EditUserForm />
          <AddUserForm />
          <UserTable users={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
