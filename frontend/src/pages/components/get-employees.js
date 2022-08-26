import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function GetEmployeesForm() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    updateList(null);
  }, []);

  async function updateList(e) {
    if (e !== null && e.target.value.toString().length > 0) {
      await fetch("http://localhost:1337/upeim/api/get-employee-by-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "same-origin",
        body: JSON.stringify({
          nombreCompleto: e.target.value.toString(),
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((reqResponse) => {
          console.log("Success:", reqResponse);
          setEmployees(reqResponse);
        });
    } else {
      await fetch("http://localhost:1337/upeim/api/get-all-employees", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "same-origin",
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((reqResponse) => {
          console.log("Success:", reqResponse);
          setEmployees(reqResponse);
        });
    }
    return employees;
  }

  return (
    <div>
      <Form onLoad={updateList}>
        <Form.Group className="mb-3" controlId="formEmployeeName">
          <Form.Label>Filtrar por nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese aquí el nombre..."
            onChange={updateList}
          />
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
          {employees !== undefined && employees.length > 0 ? (
            employees.map((employee) => {
              return (
                <tr key={"empleadoID" + employee.id.toString()}>
                  <td>{employee.id}</td>
                  <td>{employee.nombreCompleto}</td>
                  <td>{employee.documentoIdentidad}</td>
                  <td>
                    {
                      // Día
                      employee.fechaNacimiento -
                        parseInt(employee.fechaNacimiento / 10000) * 10000 -
                        parseInt(
                          parseInt(
                            employee.fechaNacimiento -
                              parseInt(employee.fechaNacimiento / 10000) * 10000
                          ) / 100
                        ) *
                          100
                    }
                    /
                    {
                      //Mes
                    }
                    {parseInt(
                      (employee.fechaNacimiento -
                        parseInt(employee.fechaNacimiento / 10000) * 10000) /
                        100
                    )}
                    /
                    {
                      // Año
                    }
                    {parseInt(employee.fechaNacimiento / 10000)}
                  </td>
                  <td>
                    {employee.esDesarrollador.toString().toUpperCase() ===
                    "TRUE"
                      ? "Si"
                      : "No"}
                  </td>
                  <td>{employee.descripcion}</td>
                  <td>{employee.area}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7}>
                No hay empleados todavía o el filtro no devuelve resultados...
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default GetEmployeesForm;
