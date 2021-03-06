var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var {
    contagem,
	fibonacci,
	mdc,
	ordenada,
	somatorio,
	primos
} = require('./funcoes')

var {
    paginaIndex,
    paginaContagem,
    paginaFibonacci,
    paginaMdc,
    paginaOrdenada,
    paginaPrimos,
    paginaSomatorio
} = require('./paginas')


//configura os dados oriundos da requisição http
app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressLayouts)
    .use(express.static('public'))
    .use(express.static('public/css'))
    .use(express.static('public/img'));

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, '/views'));





app
    .get('/', paginaIndex)
    .get('/contagem', paginaContagem)
    .get('/fibonacci', paginaFibonacci)
    .get('/mdc', paginaMdc)
    .get('/ordenada', paginaOrdenada)
    .get('/primos', paginaPrimos)
    .get('/somatorio', paginaSomatorio);




app.post('/contagem', function (req, res) {
    var body = req.body;
    var numi = parseFloat(body.numi);
    var numf = parseFloat(body.numf);
    var contagem_resultado = contagem(numi, numf);
    res.render('contagem_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Contagem',
        operacao: 'contagem',
        numi: numi,
        numf: numf,
        contagem_resultado: contagem_resultado
    });
});

app.post('/fibonacci', function (req, res) {
    var body = req.body;
    var posicao = parseFloat(body.posicao);
    var fibonacci_resultado = fibonacci(posicao);
    res.render('fibonacci_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Fibonacci',
        operacao: 'fibonacci',
        posicao: posicao,
        fibonacci_resultado: fibonacci_resultado
    });
});

app.post('/mdc', function (req, res) {
    var body = req.body;
    var num1 = parseFloat(body.num1);
    var num2 = parseFloat(body.num2);
    var mdc_resultado = mdc(num1, num2);
    res.render('mdc_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de MDC',
        operacao: 'mdc',
        num1: num1,
        num2: num2,
        mdc_resultado: mdc_resultado
    });
});

app.post('/ordenada', function (req, res) {
    var body = req.body;
    var s = parseFloat(body.s);
    var t = parseFloat(body.t);
    var u = parseFloat(body.u);
    var v = parseFloat(body.v);
    var x = parseFloat(body.x);
    var z = parseFloat(body.z);
    var ordenada_resultado = ordenada(s, t, u, v, x, z);
    res.render('ordenada_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Ordenação',
        operacao: 'ordenada',
        s: s,
        t: t,
        u: u,
        v: v,
        x: x,
        z: z,
        ordenada_resultado: ordenada_resultado
    });
});

app.post('/primos', function (req, res) {
    var body = req.body;
    var num = parseFloat(body.num);
    var primos_resultado = primos(num);
    res.render('primos_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Números Primos',
        operacao: 'primos',
        num: num,
        primos_resultado: primos_resultado
    });
});

app.post('/somatorio', function (req, res) {
    var body = req.body;
    var num1 = parseFloat(body.num1);
    var num2 = parseFloat(body.num2);
    var num3 = parseFloat(body.num3);
    var somatorio_resultado = somatorio(num1, num2, num3);
    res.render('somatorio_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Somatório',
        operacao: 'somatorio',
        num1: num1,
        num2: num2,
        num3: num3,
        somatorio_resultado: somatorio_resultado
    });
});

var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});