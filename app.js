var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));
const Post = require('./app/public/model/post');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    
    res.render('index');
})

app.get('/config', function(req, res){
    
    res.render('config');
})

app.get('/main', function(req, res){
    res.render('main');
})
app.get('/pgn1', function(req, res){
    res.render('pgn1');
})
app.get('/pgn2', function(req, res){
    res.render('pgn2');
})
app.get('/pgn3', function(req, res){
    res.render('pgn3');
})

app.post('/login', function(req, res){
    Post.post.create({
        titulo: req.body.email,
        conteudo: req.body.senha
    }).then(function(){
        res.render('main');
    }).catch(function(erro){
        res.send("Erro no login:"+erro);
    })
    
})

app.post('/cadastro', function(req, res){
    Post.Cad.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.render('main');
    }).catch(function(erro){
        res.send(erro);
    })
    
})

app.get('/forget', function(req, res){
    res.render('forget')
})

app.get('/register', function(req, res){
    res.render('register');
})

app.listen(3001);