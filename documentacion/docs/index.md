# Desafío UPEIM

Este es el sitio web de la documentación del desafío para ingreso a la Unidad de Proyectos Especiales Gestión de Infraestructura de la Movilidad del gobierno de la ciudad de Buenos Aires.

## Enlaces de navegación de la documentación

- Ver la documentación para el [backend](/backend/) (Servidor).
- Ver la documentación para la [base de datos](/database/)
- Ver la documentación para el [frontend](/frontend/) (Página web).

## Instrucciones del desafío

### Repositorio

Todo el código deberá estar guardado en algún repositorio GIT (teniendo en cuenta buenas
prácticas) junto a la documentación del proyecto. Suma la realización de una estimación en
horas de cada tarea.
Recordar indicar que paquetes se utilizaron y todos los pasos necesarios para ejecutar
correctamente la aplicación.

### Backend

Desarrollar un servidor donde se exponga una API REST que permita en formato JSON dar
una alta, baja, realizar una modificación y traer el listado de empleados.
Cada empleado deberá tener:

- Nombre Completo
- Documento de identidad
- Fecha de nacimiento
- Si es o no desarrollador
- Una breve descripción
- Área a la que pertenece
  Recuerda documentar cada endpoint que desarrolles.

### Base de datos

Los datos deberán ser almacenados en una base de datos, indicando en la documentación
el porqué de la elección de la base de datos, el DER (Diagrama de Entidad Relación), y las
consultas SQL para realizar cada acción y creación de la base.

**Nota**: Las áreas deberán estar en una tabla aparte.

### Frontend

Desarrollar una página web la cual tenga un formulario de alta de empleados, y otra donde
están listados todos los empleados que fueron dados de alta, preferentemente utilizando
algún framework moderno (Angular, Vue ó React)

### Testeo automático

Utilizar alguna librería moderna para realizar pruebas unitarias y/o funcionales de todo el
código desarrollado.
