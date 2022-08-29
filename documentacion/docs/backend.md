# Backend

## Dependencias

La siguiente es una lista de dependencias requeridas por el servidor:

- **express** versión 4.18.1
- **sqlite3** versión 5.0.11
- **cors** versión 2.8.5
- **jest** versión 29.0.1 **(Únicamente para desarrollo)**

### Instalación de dependencias

Ingresar a la terminal en la carpeta backend y luego ingresar el siguiente comando:

```bash
npm install
```

## Iniciando el servidor

Debe primero ingresar a la carpeta backend del proyecto desde la terminal y luego escribir el siguiente comando:

```bash
npm start
```

## Probando el código

Debe primero ingresar a la carpeta backend del proyecto desde la terminal y luego escribir el siguiente comando:

```bash
npm test
```

## Documentación de los endpoints

### `/upeim/api/get-all-employees`

**(Método GET)** Obtiene la lista de todos los empleados de la base de datos.

#### Ejemplo

```json
[
  {
    "id": 1,
    "nombreCompleto": "Agustín dos Santos",
    "documentoIdentidad": 987654321,
    "fechaNacimiento": 19920714,
    "esDesarrollador": "TRUE",
    "descripcion": "Desarrollador frontend",
    "area": "UPEIM"
  },
  {
    "id": 2,
    "nombreCompleto": "Federico dos Santos",
    "documentoIdentidad": 123456789,
    "fechaNacimiento": 19960906,
    "esDesarrollador": "FALSE",
    "descripcion": "DataEntry",
    "area": "Globant"
  }
]
```

### `/upeim/api/get-employee-by-name`

**(Método POST)** Obtiene la lista de todos los empleados de la base de datos en cuyos casos coincidan con el parámetro **nombreCompleto** del cuerpo de la petición.

#### Ejemplo

```json
{
  "nombreCompleto": "Ag"
}
```

Respuesta:

```json
[
  {
    "id": 1,
    "nombreCompleto": "Agustín dos Santos",
    "documentoIdentidad": 987654321,
    "fechaNacimiento": 19920714,
    "esDesarrollador": "TRUE",
    "descripcion": "Desarrollador frontend",
    "area": "UPEIM"
  }
]
```

### `/upeim/api/add-employee`

**(Método POST)** Añade un empleado a la base de datos utilizando los parámetros del cuerpo de la petición. Si algunos de los parámetros es inválido retorna el resultado de **petición errónea** al cliente.

#### Ejemplo

```json
{
  "nombreCompleto": "Agustín dos Santos",
  "documentoIdentidad": 12345678,
  "fechaNacimiento": 19920714,
  "esDesarrollador": "true",
  "descripcion": "Desarrollador frontend",
  "areaId": 1
}
```

### `/upeim/api/remove-employee`

**(Método DELETE)** Remueve un empleado de la base de datos utilizando el id del empleado en el cuerpo de la petición. Si el id en los parámetros es inválido retorna el resultado de **petición errónea** al cliente.

#### Ejemplo

```json
{
  "id": 1
}
```

### `/upeim/api/edit-employee`

**(Método POST)** Actualiza los datos de un empleado de la base de datos utilizando el id del empleado y el resto de los parámetros en el cuerpo de la petición. Si alguno de los parámetros es inválido retorna el resultado de **petición errónea** al cliente.

#### Ejemplo

```json
[
  {
    "nombreCompleto": "Federico dos Santos",
    "documentoIdentidad": 87654321,
    "fechaNacimiento": 19960906,
    "esDesarrollador": "false",
    "descripcion": "Data entry",
    "areaId": 1
  }
]
```

### `/upeim/api/get-all-areas`

**(Método GET)** Obtiene la lista de todas las áreas disponibles de la base de datos.

#### Ejemplo

```json
[
  {
    "id": 1,
    "area": "SS. Gestión de la movilidad"
  },
  {
    "id": 2,
    "area": "SS. Obras"
  },
  {
    "id": 3,
    "area": "SS. Planificación de la movilidad"
  }
]
```
