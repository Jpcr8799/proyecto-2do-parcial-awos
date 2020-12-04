const express = require('express');
const _ = require('underscore');
const Productos = require('../models/productos');
const app = express();

app.get('/productos', function (req, res) {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 5;
    Productos.find({disponibilidad: true})
    .skip(Number(desde))
    .limit(Number(hasta))
    .exec((err, productos) => {
      if(err){
        return res.status(400).json({
          ok: false,
          msg: 'Error al consultar prodcutos',
          err
        })
      }

      res.json({
        ok: true,
        msg: 'Lista de productos',
        conteo: productos.length,
        productos
      })
    });
  });
  
  app.post('/productos', function (req, res) {
    let body = req.body;
    let pro = new Productos({
      nombre: body.nombre, 
      categoria: body.categoria,
      precio: body.precio,
      usuario: body.usuario
    });

    pro.save((err, proDB) =>{
      if(err){
        return res.status(400).json({
          ok: false,
          msg: 'Error al insertar producto',
          err
        });
      }

      res.json({
        ok: true,
        msg: 'El producto se ha insertado',
        proDB
      });
    });
  });
  
  app.put('/productos/:id', function (req, res) {
   let id = req.params.id;
   let body = _.pick(req.body, ['nombre', 'categoria', 'precio']);

   Productos.findByIdAndUpdate(id, body, {new: true, runValidators: true, context: 'query'}, 
   (err, proDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        msg: 'Error al actualizar producto',
        err
      });
    }
    res.json({
      ok: true,
      msg: 'Producto actualizado',
      producto: proDB
    });
   });
  });
  
  app.delete('/productos/:id', function(req, res){

   let id = req.params.id;
   Productos.findByIdAndUpdate(id, {disponibilidad: false}, {new: true, runValidators: true, context: 'query'}, (err, proDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        msg: 'Error al momento de eliminar producto',
        err
      });
    }
    res.json({
      ok: true,
      msg: 'producto eliminado',
      proDB
    });
   });
  });

  module.exports = app;
