//FrameWork Espress é direcionando em Rotas
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require ('body-parser')
const Post = require('./models/Post');
const { response } = require('express');
const { body, validationResult } = require('express-validator');


//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    
//Rotas

    app.get('/', function (req, res){
        Post.findAll({order:[['idPessoa','ASC']]}).then(function(posts){
            console.log(posts);
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })




    app.post('/add', 
        // Adicionando validações

        body("NomePessoa")
            // Campo obrigatório
            .not().isEmpty()
            // Não pode ser do tipo numerico
            .not().isNumeric(),

        body("DtaNascimento")
            // Campo obrigatório
            .not().isEmpty()
            // Data de nascimento menor que data atual
            .custom(value=>{
                    console.log(new Date(value))
                    console.log(new Date)
                   if(new Date(value) > new Date()){
                        throw new Error('Data de nascimento deverá ser menor que data atual');
                   };

                   return true;
            }),
        body("CPF")
            // Campo obrigatório
            .not().isEmpty().withMessage("Campo obrigatório")
            // Tipo numerico
            .isNumeric().withMessage("Campo do tipo numerico")
            // Verifica se o cpf já foi cadastrado
            .custom(value=>{

                if(!value){
                    throw new Error('Campo obrigatorio para consulta de duplicidade');
                }

              return  Post.findOne({ where: { CPF: value } }).then(user=>{

                if(user){
                    return Promise.reject('CPF já cadastrado');
                }
              })
            }),

        body("Endereco")
            // Campo obrigatório
            .not().isEmpty(),
        body("Telefone")
            // Campo obrigatório
            .not().isEmpty()
            // tipo numerico
            .isNumeric(),
        // Campo obrigatório
        body("Email").not().isEmpty().isEmail().custom(value=>{
            return  Post.findOne({ where: { Email: value } }).then(user=>{

              if(user){
                  return Promise.reject('E-mail já cadastrado');
              }
            })
          })
        ,function(req, res){
            console.log(req.body)

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }
            Post.create({
                NomePessoa: req.body.NomePessoa,
                DtaNascimento: req.body.DtaNascimento,
                CPF: req.body.CPF,
                Endereco: req.body.Endereco,
                Telefone: req.body.Telefone,
                Email: req.body.Email

            }).then(function(){
                res.redirect('/')

            }).catch(function(erro){
                res.send("HOUVE UM ERRO: " + erro)
            })
    })

app.listen (8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081');
});