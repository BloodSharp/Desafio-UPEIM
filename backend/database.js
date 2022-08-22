const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

let createEmployeesTable = `CREATE TABLE "empleados" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nombreCompleto"	TEXT NOT NULL,
	"fechaNacimiento"	INTEGER NOT NULL,
	"esDesarrollador"	INTEGER NOT NULL,
	"descripcion"	TEXT,
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
        dataBase.run(createEmployeesTable);

        dataBase.run(createOfficeTable);

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
      dataBase.run(createEmployeesTable);

      dataBase.run(createOfficeTable);

      dataBase.close();
    }
  }
}

function insertEmployee(
  dataBaseName,
  employeeName,
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
    ("nombreCompleto", "fechaNacimiento", "esDesarrollador", "descripcion", "areaId")
    VALUES ('${employeeName}', ${birthDate}, '${isDeveloper}', '${description}', ${areaId});`);
    dataBase.close();
  }
  return returnValue;
}

function getEmployees(dataBaseName) {
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
    returnValue =
      dataBase.run(`SELECT empleados.id, empleados.nombreCompleto, empleados.fechaNacimiento, empleados.esDesarrollador, empleados.descripcion, oficina.area
    FROM empleados INNER JOIN oficina WHERE empleados.areaId = oficina.id`);
    dataBase.close();
  }
  return returnValue;
}

function getEmployeesByName(dataBaseName, employeeName) {
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
      `SELECT empleados.id, empleados.nombreCompleto, empleados.fechaNacimiento, empleados.esDesarrollador, empleados.descripcion, oficina.area
      FROM empleados INNER JOIN oficina WHERE empleados.nombreCompleto like '%${employeeName}%' AND empleados.areaId = oficina.id`
    );
    dataBase.close();
  }
  return returnValue;
}

function updateEmployeesById(
  dataBaseName,
  id,
  employeeName,
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
