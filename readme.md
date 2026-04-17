# Task Management App

Aplicación para la visualización, filtrado y detalle de tareas.

## Requisitos previos

Se requiere tener instalado:

- PostgreSQL
- .NET SDK
- Node.js y npm

---

## Base de Datos

1. Instalar PostgreSQL.
2. Ejecutar el script SQL ubicado en: database/schema.sql

Este script realizará lo siguiente:

- Creación de tablas de tareas
- Inserción de data de ejemplo
- Creación de funciones almacenadas (stored functions)

---

## Backend

1. Dirigirse al directorio del backend:

```
backend/task-api
```

2. Ejecutar el siguiente comando:

```
dotnet run
```

3. El backend se ejecutará en: http://localhost:1048

---

## Frontend

1. Dirigirse al directorio del frontend.

```
frontend/
```

2. Instalar dependencias:

```
npm i
```

3. Copiar .env remitido en la raíz del proyecto.

4. Ejecutar la aplicación con:

```
npm start
```
