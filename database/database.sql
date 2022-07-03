CREATE database clinica

USE clinica

CREATE TABLE paciente(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    dni VARCHAR(8) UNIQUE NOT NULL,
    obra_social VARCHAR(30),
    telefono VARCHAR(11),
    direccion VARCHAR(30) NOT NULL,
);

DESCRIBE cliente;