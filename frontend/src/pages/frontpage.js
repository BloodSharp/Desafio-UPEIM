import LogoBA from "./components/logo-ba";
import "./frontpage.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Frontpage() {
  return (
    <Container className="FrontPage-header">
      <Row>
        <Col>
          <LogoBA />
          <p>Desafío de ingreso UPEIM</p>
          <p>Agustín dos Santos</p>
          <ButtonGroup>
            <Button href="/add-employees" variant="warning">
              Añadir empleados
            </Button>
            <Button href="/list-employees" variant="warning">
              Listar empleados
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Frontpage;
