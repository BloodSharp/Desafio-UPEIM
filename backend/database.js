const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

let createEmployeesTable = `CREATE TABLE "empleados" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nombreCompleto"	TEXT NOT NULL,
  "documentoIdentidad" INTEGER NOT NULL UNIQUE,
	"fechaNacimiento"	INTEGER NOT NULL,
	"esDesarrollador"	INTEGER NOT NULL,
	"descripcion"	TEXT NOT NULL,
	"areaId"	INTEGER NOT NULL,
	FOREIGN KEY("areaId") REFERENCES "oficina"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);`;

let createOfficeTable = `CREATE TABLE "oficina" (
	"id"	INTEGER NOT NULL UNIQUE,
	"area"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);`;

// Verificamos si la base de datos existe, en caso contrario la creamos.
function generateIfDoesntExist(dataBaseName) {
  try {
    if (fs.existsSync(dataBaseName)) {
      dataBase = new sqlite3.Database(
        dataBaseName,
        sqlite3.OPEN_READWRITE,
        (err) => {
          if (err) {
            console.err("No se pudo abrir la base de datos.");
            return false;
          } else {
            return true;
          }
        }
      );
      if (dataBase != null) {
        dataBase.close();
      }
    } else {
      fs.closeSync(fs.openSync(dataBaseName, "w"));
      dataBase = new sqlite3.Database(
        dataBaseName,
        sqlite3.OPEN_READWRITE,
        (err) => {
          if (err) {
            console.err("No se pudo abrir la base de datos.");
            return false;
          } else {
            return true;
          }
        }
      );
      if (dataBase != null) {
        dataBase.run(createOfficeTable);

        dataBase.run(createEmployeesTable);

        dataBase.close();
      }
    }
  } catch (err) {
    fs.closeSync(fs.openSync(dataBaseName, "w"));
    dataBase = new sqlite3.Database(
      dataBaseName,
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.err("No se pudo abrir la base de datos.");
          return false;
        } else {
          return true;
        }
      }
    );
    if (dataBase != null) {
      dataBase.run(createOfficeTable);

      dataBase.run(createEmployeesTable);

      dataBase.close();
    }
  }
}

function insertEmployee(
  dataBaseName,
  employeeName,
  documentId,
  birthDate,
  isDeveloper,
  description,
  areaId
) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.run(`INSERT INTO "empleados"
    ("nombreCompleto", "documentoIdentidad", "fechaNacimiento", "esDesarrollador", "descripcion", "areaId")
    VALUES ('${employeeName}', ${documentId}, ${birthDate}, '${isDeveloper}', '${description}', ${areaId});`);
    dataBase.close();
  }
  return returnValue;
}

function getEmployees(dataBaseName, res) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.all(
      `SELECT empleados.id, empleados.nombreCompleto, empleados.documentoIdentidad, empleados.fechaNacimiento, empleados.esDesarrollador, empleados.descripcion, oficina.area
        FROM empleados INNER JOIN oficina WHERE empleados.areaId = oficina.id`,
      [],
      (err, rows) => {
        if (err) {
          res.json(null);
          return;
        }
        res.json(rows);
      }
    );
    dataBase.close();
  }
  return returnValue;
}

function getEmployeesByName(dataBaseName, res, employeeName) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.all(
      `SELECT empleados.id, empleados.nombreCompleto, empleados.documentoIdentidad, empleados.fechaNacimiento, empleados.esDesarrollador, empleados.descripcion, oficina.area
      FROM empleados INNER JOIN oficina WHERE empleados.nombreCompleto like '%${employeeName}%' AND empleados.areaId = oficina.id`,
      [],
      (err, rows) => {
        if (err) {
          res.json(null);
          return;
        }
        res.json(rows);
      }
    );
    dataBase.close();
  }
  return returnValue;
}
    );
    dataBase.close();
  }
  return returnValue;
}

function updateEmployeesById(
  dataBaseName,
  id,
  employeeName,
  documentId,
  birthDate,
  isDeveloper,
  description,
  areaId
) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.run(
      `UPDATE "empleados" SET
      "nombreCompleto" = "${employeeName}",
      "documentoIdentidad" = '${documentId}',
      "fechaNacimiento" = '${birthDate}',
      "esDesarrollador" = '${isDeveloper}',
      "descripcion" = "${description}",
      "areaId" = '${areaId}'
      WHERE empleados.id = ${id}`
    );
    dataBase.close();
  }
  return returnValue;
}

function getAllAreas(dataBaseName) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.run("SELECT area FROM oficina");
    dataBase.close();
  }
  return returnValue;
}

function insertArea(dataBaseName, areaName) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.run(
      `INSERT INTO oficina("area") VALUES ('${areaName}')`
    );
    dataBase.close();
  }
  return returnValue;
}

function getAreasSize(dataBaseName, areaName) {
  let returnValue = null;
  dataBase = new sqlite3.Database(
    dataBaseName,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.err("No se pudo abrir la base de datos.");
        return false;
      } else {
        return true;
      }
    }
  );
  if (dataBase != null) {
    returnValue = dataBase.run(`SELECT COUNT(*) FROM oficina`);
    dataBase.close();
  }
  return returnValue;
}

module.exports = {
  generateIfDoesntExist,
  insertEmployee,
  getEmployees,
  getEmployeesByName,
  updateEmployeesById,
  getAllAreas,
  insertArea,
  getAreasSize,
};
