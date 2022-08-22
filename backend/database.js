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
