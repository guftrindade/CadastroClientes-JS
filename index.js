//FrameWork Espress é direcionando em Rotas
const express = require('express');
const app = express();

//Rota principal
app.get('/', function(req, res){
    res.send('Seja bem-vindo ao meu app!');
})


app.listen (8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081');
});