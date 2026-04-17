# Justificación de decisiones técnicas clave

## 1. Arquitectura en Capas (Clean Architecture)

**Decisión:** Separar el backend en capas: API, Application e Infrastructure.

**Justificación:**

- Reduce el acoplamiento entre componentes
- Facilita el mantenimiento y escalabilidad
- Permite cambiar la base de datos o framework sin afectar la lógica de negocio

**Alternativa considerada:**

- Arquitectura monolítica simple

**Por qué no se eligió:**

- Dificulta el crecimiento del proyecto
- Mezcla lógica de negocio con acceso a datos

---

## 2. Uso de MediatR (Patrón CQRS ligero)

**Decisión:** Implementar MediatR para manejar casos de uso.

**Justificación:**

- Desacopla controllers de la lógica de negocio
- Mejora la organización del código (un handler por caso de uso)

**Alternativa:**

- Llamar directamente a servicios desde controllers

**Por qué no:**

- Genera controllers muy cargados
- No escala tan fino

---

## 3. Uso de Dapper

**Decisión:** Utilizar Dapper para acceso a datos.

**Justificación:**

- Mayor rendimiento (menos overhead que un ORM completo)
- Control total sobre queries SQL
- Ideal para uso con stored procedures

**Alternativa:**

- Entity Framework

**Por qué no:**

- Overhead innecesario para este tipo de proyecto
- Menor control sobre queries optimizadas

---

## 4. Uso de PostgreSQL como base de datos

**Decisión:** Utilizar PostgreSQL.

**Justificación:**

- Open source y robusto
- Buen soporte para funciones y procedimientos almacenados
- Alto rendimiento en consultas relacionales

---

## 5. Uso de Stored Procedures

**Decisión:** Implementar lógica de consulta en la base de datos.

**Justificación:**

- Mejora el rendimiento
- Centraliza lógica compleja de consultas
- Reduce carga en el backend

---

## 6. Uso de React Native con Expo

**Decisión:** Construir la app con React Native + Expo.

**Justificación:**

- Desarrollo rápido multiplataforma
- Menor configuración inicial
- Gran ecosistema

**Alternativa:**

- Desarrollo nativo (Android/iOS)

**Por qué no:**

- Mayor tiempo de desarrollo
- Duplicación de esfuerzo

---

## 7. Uso de Vertical Slicing y Scream Architecture en el frontend

**Decisión:** Organizar el frontend por features en lugar de por tipo de archivo.

**Justificación:**

- Agrupa todo lo relacionado a una funcionalidad en un solo lugar
- Reduce la dependencia entre módulos
- Facilita la escalabilidad del proyecto
- Mejora la mantenibilidad y legibilidad del código

**Ventajas clave:**

- Permite trabajar por features
- Evita estructuras globales difíciles de mantener (components/, hooks/, utils/ gigantes)
- Facilita eliminar o modificar funcionalidades completas sin afectar otras partes

**Alternativa:**

- Arquitectura por capas en frontend (components, hooks, services globales)

**Por qué no:**

- Genera alta dependencia entre archivos
- Difícil de escalar en aplicaciones medianas/grandes
- Menor cohesión por funcionalidad

---

## 8. Uso de Zustand para manejo de estado

**Decisión:** Usar Zustand en lugar de Redux.

**Justificación:**

- API simple y minimalista
- Menor boilerplate
- Mejor experiencia de desarrollo

**Alternativa:**

- Redux

**Por qué no:**

- Más complejo para este tamaño de proyecto
- Exceso de configuración

---

## 9. Uso de NativeWind para estilos

**Decisión:** Utilizar NativeWind (Tailwind CSS para React Native) para los estilos de la app.

**Justificación:**

- Acelera el desarrollo de interfaces
- Facilita mantener un sistema de diseño coherente (espaciados, colores, tipografía)
- Permite escribir estilos de forma declarativa y consistente usando clases utilitarias

---

## 10. Uso de Axios para comunicación HTTP

**Decisión:** Usar Axios en el frontend.

**Justificación:**

- Soporte para interceptores
- Manejo centralizado de errores
- Es mejor que fetch

---

## 11. Uso de Adapters en el frontend

**Decisión:** Transformar datos del backend antes de usarlos.

**Justificación:**

- Desacopla frontend del formato del backend
- Permite cambios en API sin romper UI
- Mejora claridad del modelo de datos

---

## 12. Uso de variables de entorno (.env)

**Decisión:** Configuración mediante variables de entorno.

**Justificación:**

- Seguridad (no hardcodeo valores)
- Flexibilidad entre entornos (dev, prod)

---
