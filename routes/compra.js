var express = require('express');
var router = express.Router();
var destinationsModel =require('.././models/destinationsModel');
var carritoController = require('../controllers/carritoController');



router.get('/carrito', function(req, res, next) {
    destinationsModel.getDestinations((err,destinos)=> {
        res.render('carrito', {
            title: 'Carrito de compra',
            layout: '../views/templates/default',
            destinos: destinos
        });
    })
});

router.get('/comprar/:id', function(req, res, next) {
    console.log("entra en la ruta");
    carritoController.addLinea((req, res, next)=> {
        res.redirect('/carrito');
        });
});


module.exports = router;
