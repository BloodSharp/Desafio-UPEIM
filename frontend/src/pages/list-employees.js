import NavigationBar from "./components/nav-bar";
import LogoBA from "./components/logo-ba";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ListEmployees() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Col />
          <Col>
            <LogoBA />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default ListEmployees;
