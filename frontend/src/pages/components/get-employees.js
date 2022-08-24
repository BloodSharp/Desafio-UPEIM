import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function GetEmployeesForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formEmployeeName">
          <Form.Label>Filtrar por nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese aquí el nombre..." />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID del Empleado</th>
            <th>Nombre Completo</th>
            <th>Documento de Identidad</th>
            <th>Fecha de nacimiento</th>
            <th>¿Es desarrollador?</th>
            <th>Descripción</th>
            <th>Área a la cual pertenece</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Agustín dos Santos</td>
            <td>36929766</td>
            <td>14/07/1992</td>
            <td>Si</td>
            <td>Desarrollador Frontend</td>
            <td>UPEIM</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Federico dos Santos</td>
            <td>??????</td>
            <td>06/09/1996</td>
            <td>Si</td>
            <td>DataEntry</td>
            <td>Globant</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default GetEmployeesForm;
