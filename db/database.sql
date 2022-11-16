CREATE DATABASE if not exists companydb;

USE companydb;

CREATE TABLE tareas (
    Id INT(11) not null auto_increment,
    Descripcion VARCHAR (200),
    Estado VARCHAR (50),
    Contenido LongBlob,
    primary key (Id)
);

describe tareas;

INSERT INTO tareas (Id, Descripcion, Estado)

VALUES
(1, 'Ir al super', 'Pendiente'),
(2, 'lavar', 'Pendiente'),
(3, 'combustible', 'Pendiente'),
(4, 'dormir', 'Pendiente'),
(5, 'trabajar', 'Pendiente');