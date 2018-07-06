const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000 ;

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');


app.get('/', (req, res)=> {

  res.render('homes.hbs',{nombre:'Javier',
                          anio:2018})})



app.get('/about', (req, res)=> {

  res.render('about.hbs',{nombre:'Javier'})})



app.listen(port,()=>{console.log(`Escuchando peticiones en el puerto ${port}`)})
