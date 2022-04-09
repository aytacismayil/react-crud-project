import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const usersData = [
    { id: 1, first: "Aytaj", last: "Ismayil", username: "@iaytaj" },
    { id: 2, first: "Fatma", last: "Memmedova", username: "@m_fatma" },
    { id: 3, first: "Aisa", last: "Suleymanova", username: "@aisa" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

 

  return (
    <Container fluid>
      <Row>
        <Col>
          <EditUserForm />
          <AddUserForm addUser={addUser} />
          <UserTable users={users} setUser={()=>setUsers()}  />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
