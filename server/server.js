const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
 res.send('<h1> <font color="Blue"> welcome to my web server  </font></h1>')
});

app.get('/Usuario', function (req, res) {
  res.send('<h1> <font color="Blue"> welcome to my web server Usuario  </font></h1>')
 });
 app.get('/saludo', function (req, res) {
  res.json ({
    ok: '200',
    mensaje: 'welcome, hello'
  });
 });

app.listen(3000, () =>{
 console.log('El servidor esta en linea por el puerto 3000');
});