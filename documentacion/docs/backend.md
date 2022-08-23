# Backend

## Dependencias

La siguiente es una lista de dependencias requeridas por el servidor:

- **express** versión 4.18.1
- **sqlite3** versión 5.0.11

### Instalación de dependencias

Ingresar a la terminal en la carpeta backend y luego ingresar el siguiente comando:

```bash
npm install
```

## Documentación de los endpoints

### `/upeim/api/get-all-employees`

Obtiene la lista de todos los empleados de la base de datos.

### `/upeim/api/get-employee-by-name`

Obtiene la lista de todos los empleados de la base de datos en cuyos casos coincidan con el parámetro **nombreCompleto** del cuerpo de la petición.

### `/upeim/api/add-employee`

Añade un empleado a la base de datos utilizando los parámetros del cuerpo de la petición. Si algunos de los parámetros es nulo retorna el resultado de **petición errónea** al cliente.

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

Remueve un empleado de la base de datos utilizando el id del empleado en el cuerpo de la petición. Si el id en los parámetros es nulo retorna el resultado de **petición errónea** al cliente.

#### Ejemplo

```json
{
  "id": 1
}
```

### `/upeim/api/edit-employee`

Actualiza los datos de un empleado de la base de datos utilizando el id del empleado y el resto de los parámetros en el cuerpo de la petición. Si alguno de los parámetros es nulo retorna el resultado de **petición errónea** al cliente.

#### Ejemplo

```json
{
  "nombreCompleto": "Federico dos Santos",
  "documentoIdentidad": 87654321,
  "fechaNacimiento": 19960906,
  "esDesarrollador": "false",
  "descripcion": "Data entry",
  "areaId": 1
}
```
