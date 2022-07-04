CREATE database example

USE example

CREATE TABLE `example`.`exa`(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    dni VARCHAR(8) UNIQUE NOT NULL,
    obra_social VARCHAR(30),
    telefono VARCHAR(11),
    direccion VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id`), UNIQUE (`dni`)) 
    ENGINE = InnoDB;

DESCRIBE exam;