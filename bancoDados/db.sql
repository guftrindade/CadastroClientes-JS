CREATE DATABASE CADASTROCLIENTE_JS;
USE CADASTROCLIENTE_JS;


CREATE TABLE IF NOT EXISTS Pessoa(
	IdPessoa int auto_increment primary key,
    NomePessoa varchar(500) not null,
    DtaNascimento date not null, 
    DtaInclusao timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS Cadastro(
	IdPessoa int not null,
    CPF varchar(11) not null,
    Endereco varchar(500) not null, 
    Telefone varchar(14) not null,
    Email varchar(300) not null,
    foreign key (IdPessoa) references Pessoa(IdPessoa) on update restrict on delete cascade
);

insert into Pessoa(NomePessoa, DtaNascimento) values ('Gustavo Nunes dos Santos', 19901122);
insert into Pessoa(NomePessoa, DtaNascimento) values ('André Medeiros Araujo', 19951211);

insert into Cadastro values (1,'25693956984', 'Rua dos Araújos, 884, Vila Formosa', '33999874585', 'pessoal@gmail.com');
insert into Cadastro values (2,'85966585478', 'Avenida Vila Rica, 12, Ibituruna', '33985588969', 'digital@gmail.com');
    