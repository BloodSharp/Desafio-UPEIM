import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import toast, { Toaster } from "react-hot-toast";

function InsertEmployee() {
  // Para escoger las áreas
  const [areas, setAreas] = useState([]);

  // Para enviar los datos
  const [employeeName, setEmployeeName] = useState("");
  const [employeeDocumentId, setEmployeeDocumentId] = useState(0);
  const [employeeBirthDate, setEmployeeBirthDate] = useState("");
  const [employeeIsDeveloper, setEmployeeIsDeveloper] = useState(false);
  const [employeeDescription, setEmployeeDescription] = useState("");
  const [employeeAreaId, setEmployeeAreaId] = useState(0);

  async function updateAreas() {
    await fetch("http://localhost:1337/upeim/api/get-all-areas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
        setAreas([]);
      })
      .then((reqResponse) => {
        console.log("Success:", reqResponse);
        if (reqResponse !== undefined && reqResponse.length > 0) {
          setAreas(reqResponse);
          setEmployeeAreaId(reqResponse[0].id);
        } else {
          setAreas([]);
        }
      });
  }

  useEffect(() => {
    updateAreas();
  }, []);

  async function onSubmitEmployee(e) {
    e.preventDefault();
    let date = new Date(employeeBirthDate + "T00:00:00");
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    await fetch("http://localhost:1337/upeim/api/add-employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        nombreCompleto: employeeName,
        documentoIdentidad: employeeDocumentId,
        fechaNacimiento: year * 10000 + (month + 1) * 100 + day,
        esDesarrollador:
          employeeIsDeveloper.toString().toUpperCase() === "TRUE"
            ? "true"
            : "false",
        descripcion: employeeDescription,
        areaId: employeeAreaId,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
        toast.error("¡Hubo un error al añadir el empleado!", {
          style: { background: "#ffc107", color: "#000" },
        });
      })
      .then((reqResponse) => {
        console.log("Success:", reqResponse);
        if (reqResponse.resultado === true) {
          toast.success("¡Perfecto, el empleado fue añadido exitosamente!", {
            style: { background: "#ffc107", color: "#000" },
          });
        } else {
          toast.error("¡Hubo un error al añadir el empleado!", {
            style: { background: "#ffc107", color: "#000" },
          });
        }
      });
  }

  return (
    <div>
      <Form onSubmit={onSubmitEmployee}>
        <Form.Group className="mb-3" controlId="formEmployeeName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
            type="text"
            placeholder="Ingrese aquí el nombre completo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDocumentId">
          <Form.Label>Documento de Identidad</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmployeeDocumentId(e.target.value);
            }}
            type="number"
            placeholder="Ingrese aquí el documento de identidad"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBirthDate">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => {
              setEmployeeBirthDate(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIsDeveloper">
          <Form.Check
            type="checkbox"
            label="¿Es desarrollador?"
            onChange={(e) => {
              setEmployeeIsDeveloper(e.target.checked);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Descripción del empleado</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmployeeDescription(e.target.value);
            }}
            as="textarea"
            placeholder="Ingrese una descripción del empleado aquí"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formArea">
          <Form.Label>
            Seleccione el área a la cuál pertenece el nuevo empleado
          </Form.Label>
          <Form.Select
            aria-label="Floating label select example"
            onChange={(e) => {
              setEmployeeAreaId(e.target.value);
            }}
          >
            {areas.map((area) => {
              return (
                <option value={area.id} key={"areaId" + area.id.toString()}>
                  {area.area}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Button variant="warning" className="mb-3" type="submit">
          Agregar empleado
        </Button>
      </Form>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default InsertEmployee;
