CREATE DATABASE CADASTROCLIENTE_JS;
USE CADASTROCLIENTE_JS;

CREATE TABLE IF NOT EXISTS Pessoa(
	IdPessoa int auto_increment primary key,]
    NomePessoa varchar(500) not null,
    DtaNascimento date not null, 
    CPF varchar(11) not null,
    Endereco varchar(500) not null, 
    Telefone varchar(14) not null,
    Email varchar(300) not null,
    DtaInclusao timestamp default current_timestamp
);

    