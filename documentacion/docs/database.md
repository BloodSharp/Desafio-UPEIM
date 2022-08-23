# Base de datos

## Elección de base de datos

Se ha elegido el tipo de base de datos sqlite3 por su sencillez para proyectos pequeños como este. Para proyectos donde se requiere por lo general mucho almacenamiento escogería MariaDB.

## Diagrama Entidad Relación

![Imagen del Diagrama](img/DER.png)

## Consultas SQL

### Creación de la base de datos

```SQL
CREATE TABLE "empleados" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nombreCompleto"	TEXT NOT NULL,
    "documentoIdentidad" INTEGER NOT NULL UNIQUE,
	"fechaNacimiento"	INTEGER NOT NULL,
	"esDesarrollador"	INTEGER NOT NULL,
	"descripcion"	TEXT NOT NULL,
	"areaId"	INTEGER NOT NULL,
	FOREIGN KEY("areaId") REFERENCES "oficina"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
```

```SQL
CREATE TABLE "oficina" (
	"id"	INTEGER NOT NULL UNIQUE,
	"area"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
```

### Obtener datos de los empleados de la base de datos

La siguiente instrucción obtiene todos los empleados y el área a la cual pertenece.

```SQL
SELECT
    empleados.id, empleados.nombreCompleto, empleados.documentoIdentidad,
    empleados.fechaNacimiento, empleados.esDesarrollador,
    empleados.descripcion, oficina.areaFROM empleados
    INNER JOIN oficina WHERE empleados.areaId = oficina.id
```

La siguiente instrucción obtiene todos los empleados y el área a la cual pertenece filtrando por su nombre.

```SQL
SELECT empleados.id, empleados.nombreCompleto, empleados.documentoIdentidad, empleados.fechaNacimiento, empleados.esDesarrollador, empleados.descripcion, oficina.area
      FROM empleados INNER JOIN oficina WHERE empleados.nombreCompleto like '%Nombre a buscar%' AND empleados.areaId = oficina.id
```
