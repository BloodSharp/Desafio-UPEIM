import NavigationBar from "./components/nav-bar";
import LogoBA from "./components/logo-ba";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetEmployeesForm from "./components/get-employees";

function ListEmployees() {
  return (
    <div>
      <NavigationBar />
      <br />
      <Container>
        <Row>
          <Col />
          <Col>
            <LogoBA />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <GetEmployeesForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ListEmployees;
