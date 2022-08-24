import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InsertEmployee() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmployeeName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese aquí el nombre completo"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDocumentId">
        <Form.Label>Documento de Identidad</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese aquí el documento de identidad"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBirthDate">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formIsDeveloper">
        <Form.Check type="checkbox" label="¿Es desarrollador?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripción del empleado</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Ingrese una descripción del empleado aquí"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formArea">
        <Form.Label>
          Seleccione el área a la cuál pertenece el nuevo empleado
        </Form.Label>
        <Form.Select aria-label="Floating label select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default InsertEmployee;
