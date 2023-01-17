CREATE TABLE accounts (
	id serial PRIMARY KEY,
	nombreCompleto VARCHAR ( 50 ) UNIQUE NOT NULL,
	edad INT NOT NULL
);