const express = require("express");

const app = express();

app.use(express.json());

app.get("/upeim/api/get-all-employees", (req, res) => {
  res.send("json de empleados");
});

app.post("/upeim/api/add-employee", (req, res) => {});

app.delete("/upeim/api/remove-employee", (req, res) => {});

app.put("/upeim/api/edit-employee", (req, res) => {});

app.listen(1337, () => {
  console.log("Iniciando servidor en puerto 1337...");
});
