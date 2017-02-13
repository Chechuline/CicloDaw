DROP DATABASE ejercicios8;

CREATE DATABASE ejercicios8 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE ejercicios8;

CREATE TABLE ejercicios8.noticias ( 
	Titulo VARCHAR(20) NOT NULL , 
	Descripcion VARCHAR(40) NOT NULL , 
	Autor VARCHAR(45) NOT NULL , 
        img blob NULL,
	PRIMARY KEY (Titulo)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
