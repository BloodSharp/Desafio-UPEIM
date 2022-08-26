// Dependencias necesarias.
const express = require("express");
const cors = require("cors");
const upeimDatabase = require("./database.js");
const sanitizer = require("./sanitizer.js");

// Crea la base de datos si no existe y añade algunas áreas.
const dataBaseName = "./upeim.db";
upeimDatabase.generateIfDoesntExist(dataBaseName);

const app = express();

// Utiliza middlewares para las peticiones del servidor.
app.use(express.json());
app.use(cors());

// Obtiene la lista de todos los empleados de la base de datos.
app.get("/upeim/api/get-all-employees", async (req, res) => {
  await upeimDatabase.getEmployees(dataBaseName, res);
});

// Obtiene la lista de todos los empleados de la base de datos que coincidad con el nombre que se va escribiendo.
app.post("/upeim/api/get-employee-by-name", async (req, res) => {
  if (
    sanitizer.validateIsTextOnlyAndHasNoSymbols(req.body.nombreCompleto) ==
    false
  ) {
    res.status(400).json([]);
    return;
  }
  await upeimDatabase.getEmployeesByName(
    dataBaseName,
    res,
    req.body.nombreCompleto
  );
});

// Agrega un empleado a la base de datos, retorna petición errónea en caso de que no se pueda agregar el empleado.
app.post("/upeim/api/add-employee", async (req, res) => {
  if (
    sanitizer.validateIsTextOnlyAndHasNoSymbols(req.body.nombreCompleto) ==
      false ||
    sanitizer.validateIsInteger(req.body.documentoIdentidad) == false ||
    sanitizer.validateIsInteger(req.body.fechaNacimiento) == false ||
    sanitizer.validateIsBoolean(req.body.esDesarrollador) == false ||
    sanitizer.validateIsTextOnlyAndHasNoSymbols(req.body.descripcion) ==
      false ||
    sanitizer.validateIsInteger(req.body.areaId) == false
  ) {
    res.status(400).json({ resultado: false });
    return;
  }
  await upeimDatabase.insertEmployee(
    dataBaseName,
    res,
    req.body.nombreCompleto,
    req.body.documentoIdentidad,
    req.body.fechaNacimiento,
    req.body.esDesarrollador.toString().toUpperCase(),
    req.body.descripcion,
    req.body.areaId
  );
});

// Elimina un empleado de la base de datos por su número de identificación, en caso de que no exista retorna petición errónea.
app.delete("/upeim/api/remove-employee", async (req, res) => {
  if (sanitizer.validateIsInteger(req.body.id)) {
    res.status(400).json({ resultado: false });
    return;
  }
  await upeimDatabase.removeEmployeeById(dataBaseName, res, req.body.id);
});

// Modifica un empleado de la base de datos por su número de identificación, en caso de que no se pueda modificar retorna petición errónea.
app.put("/upeim/api/edit-employee", async (req, res) => {
  if (
    sanitizer.validateIsInteger(req.body.id) == false ||
    sanitizer.validateIsTextOnlyAndHasNoSymbols(req.body.nombreCompleto) ==
      false ||
    sanitizer.validateIsInteger(req.body.documentoIdentidad) == false ||
    sanitizer.validateIsInteger(req.body.fechaNacimiento) == false ||
    sanitizer.validateIsBoolean(req.body.esDesarrollador) == false ||
    sanitizer.validateIsTextOnlyAndHasNoSymbols(req.body.descripcion) ==
      false ||
    sanitizer.validateIsInteger(req.body.areaId) == false
  ) {
    res.status(400).json({ resultado: false });
    return;
  }
  await upeimDatabase.updateEmployeesById(
    dataBaseName,
    res,
    req.body.id,
    req.body.nombreCompleto,
    req.body.documentoIdentidad,
    req.body.fechaNacimiento,
    req.body.esDesarrollador.toUpperCase(),
    req.body.descripcion,
    req.body.areaId
  );
});

// Obtiene todas las áreas disponible en la base de datos, actualmente se auto-generan 3 áreas (ver database.js).
app.get("/upeim/api/get-all-areas", async (req, res) => {
  await upeimDatabase.getAllAreas(dataBaseName, res);
});

// Inicia el servidor en el puerto 1337.
app.listen(1337, () => {
  console.log("Iniciando servidor en puerto 1337...");
});
