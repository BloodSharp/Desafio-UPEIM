const express = require("express");
const cors = require("cors");
const upeimDatabase = require("./database.js");

const dataBaseName = "./upeim.db";
upeimDatabase.generateIfDoesntExist(dataBaseName);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/upeim/api/get-all-employees", async (req, res) => {
  await upeimDatabase.getEmployees(dataBaseName, res);
});

app.post("/upeim/api/get-employee-by-name", async (req, res) => {
  await upeimDatabase.getEmployeesByName(
    dataBaseName,
    res,
    req.body.nombreCompleto
  );
});

app.post("/upeim/api/add-employee", async (req, res) => {
  if (
    req.body.nombreCompleto == null ||
    req.body.documentoIdentidad == null ||
    req.body.fechaNacimiento == null ||
    req.body.esDesarrollador == null ||
    req.body.descripcion == null ||
    req.body.areaId == null
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

app.delete("/upeim/api/remove-employee", async (req, res) => {
  if (req.body.id == null) {
    res.status(400).json({ resultado: false });
    return;
  }
  await upeimDatabase.removeEmployeeById(dataBaseName, res, req.body.id);
});

app.put("/upeim/api/edit-employee", async (req, res) => {
  if (
    req.body.id == null ||
    req.body.nombreCompleto == null ||
    req.body.documentoIdentidad == null ||
    req.body.fechaNacimiento == null ||
    req.body.esDesarrollador == null ||
    req.body.descripcion == null ||
    req.body.areaId == null
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

app.listen(1337, () => {
  console.log("Iniciando servidor en puerto 1337...");
});
