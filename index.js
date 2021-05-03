//FrameWork Espress é direcionando em Rotas
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require ('body-parser')
const Post = require('./models/Post')


//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    
//Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            nomePessoa: req.body.nomePessoa,
            DtaNascimento: req.body.DtaNascimento,
            //CPF: req.body.CPF,
            //Endereco: req.body.Endereco,
            //Telefone: req.body.Telefone,
            //Email: req.body.Email

        }).then(function(){
            res.send("CLIENTE CADASTRADO COM SUCESSO!")
        }).catch(function(erro){
            res.send("HOUVE UM ERRO: " + erro)
        })
    })

app.listen (8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081');
});