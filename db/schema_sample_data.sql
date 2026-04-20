/*CREACIÓN DE TABLAS*/
CREATE TABLE IF NOT EXISTS public."Task"
(
    "TaskId" SERIAL PRIMARY KEY,
    "Title" VARCHAR(150) NOT NULL,
    "Description" TEXT,
    "PriorityId" INT NOT NULL,
    "StatusId" INT NOT NULL,

    -- Auditoría
    "IsActive" BOOLEAN NOT NULL DEFAULT TRUE,
    "IsDeleted" BOOLEAN NOT NULL DEFAULT FALSE,
    "CreatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "CreatedBy" VARCHAR(50),
    "UpdatedAt" TIMESTAMP,
    "UpdatedBy" VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS public."Priority"
(
    "PriorityId" SERIAL PRIMARY KEY,
    "Name" VARCHAR(50) NOT NULL,
    "Code" VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Status"
(
    "StatusId" SERIAL PRIMARY KEY,
    "Name" VARCHAR(50) NOT NULL,
    "Code" VARCHAR(20) NOT NULL
);

/*INSERT DATA*/

INSERT INTO public."Priority" ("Name", "Code") VALUES
('Alta', 'HIGH'),
('Media', 'MEDIUM'),
('Baja', 'LOW');

INSERT INTO public."Status" ("Name", "Code") VALUES
('Pendiente', 'PENDING'),
('En Proceso', 'IN_PROGRESS'),
('Completado', 'DONE');

INSERT INTO public."Task"
(
    "Title",
    "Description",
    "PriorityId",
    "StatusId",
    "CreatedBy"
)
VALUES
('Implementar login', 'Crear autenticación con JWT en el backend', 1, 1, 'system'),
('Pantalla tareas', 'Diseñar UI en React Native para listado de tareas', 2, 2, 'system'),
('Fix bug API', 'Corregir error en endpoint de consulta', 1, 2, 'system'),
('Documentación', 'Generar documentación técnica del proyecto', 3, 1, 'system'),
('Deploy inicial', 'Subir primera versión a servidor', 1, 3, 'system');

/*PROCEDIMIENTOS*/
CREATE OR REPLACE FUNCTION public."SP_Task_GetAll"
(
    p_status_id INT DEFAULT NULL,
    p_priority_id INT DEFAULT NULL
)
RETURNS TABLE
(
    "TaskId" INT,
    "Title" VARCHAR,
    "Description" TEXT,
    "PriorityId" INT,asdsadsad
    "PriorityName" VARCHAR,
    "StatusId" INT,
    "StatusName" VARCHAR,
    "CreatedAt" TIMESTAMP
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        t."TaskId",
        t."Title",
        t."Description",
        t."PriorityId",
        p."Name" AS "PriorityName",
        t."StatusId",
        s."Name" AS "StatusName",
        t."CreatedAt"
    FROM public."Task" t
    INNER JOIN public."Priority" p ON p."PriorityId" = t."PriorityId"
    INNER JOIN public."Status" s ON s."StatusId" = t."StatusId"
    WHERE 
        t."IsDeleted" = FALSE
        AND (p_status_id IS NULL OR t."StatusId" = p_status_id)
        AND (p_priority_id IS NULL OR t."PriorityId" = p_priority_id)
    ORDER BY t."CreatedAt" DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public."SP_Task_GetById"
(
    p_task_id INT
)
RETURNS TABLE
(
    "TaskId" INT,
    "Title" VARCHAR,
    "Description" TEXT,
    "PriorityId" INT,
    "PriorityName" VARCHAR,
    "StatusId" INT,
    "StatusName" VARCHAR,
    "CreatedAt" TIMESTAMP
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        t."TaskId",
        t."Title",
        t."Description",
        t."PriorityId",
        p."Name",
        t."StatusId",
        s."Name",
        t."CreatedAt"
    FROM public."Task" t
    INNER JOIN public."Priority" p ON p."PriorityId" = t."PriorityId"
    INNER JOIN public."Status" s ON s."StatusId" = t."StatusId"
    WHERE t."TaskId" = p_task_id
      AND t."IsDeleted" = FALSE;
END;
$$;