DROP DATABASE ejercicios8;

CREATE DATABASE ejercicios8 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE ejercicios8;

CREATE TABLE ejercicios8.usuarios ( 
	usuarioId VARCHAR(20) NOT NULL , 
	password VARCHAR(40) NOT NULL , 
	eMailUsuario VARCHAR(45) NOT NULL , 
	PRIMARY KEY (usuarioId)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO ejercicios8.usuarios (usuarioId,password,eMailUsuario) values 
        ('USER1','LALAL','A'),
        ('admin','admin','A'),
        ('alumno','alumno','A');