var carroModel=require('../models/carritoModel');

var carroController = {};

//const paginate = require('express-paginate');

carroController.addLinea=function (req, res, next){
    console.log("entra al controlador");
    carroModel.addLinea(req.params.id,(err,resultado)=>{
        if(err) {
            res.status(500).json(err);
        }else{
            console.log(resultado);
            let carrito=[];
            let producto={
                id_producto:resultado.id,
                nomb_producto: resultado.nombre_viaje,
                cantidad:1,
                precio:resultado.precio,
                imagen:resultado.imagen,
                fecha:resultado.fechas,
                descripcion:resultado.descripcion
                };
            if(!req.session.compra){
                carrito.push(producto);
                req.session.compra=carrito;
            }else{
                for(let i=0;i<req.session.compra.length;i++){
                    if(req.session.compra[i].producto[resultado.id]){
                        req.session.compra[i].producto[cantidad]++;
                        req.session.compra[i].producto[precio]=req.session.compra[i].producto[cantidad]*resultado.precio;
                    }
                    else{
                        req.session.compra.push(producto);
                    }
                }
            }

        }
    })
    console.log(req.session.compra);
};


module.exports = carroController;