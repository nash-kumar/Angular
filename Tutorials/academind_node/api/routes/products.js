const express = require('express');
const Joi = require('joi');

const productModel = require('../models/product')

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Handling GET req to products!'
    // });
    productModel.find(function (error, result) {
        if (error) {
            res.status(500).json({
                message: error.message
            });
        } else {
            res.status(200).json({
                message: "Succesful!!",
                result
            })
        }
    });
});

router.post('/', (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }
    const schema = {
        name: Joi.string().min(3).required(),
        price: Joi.number().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send({ message: result.error.details[0].message });
        return;
    } else {

        const product = new productModel({
            name: req.body.name,
            price: req.body.price
        });
        product.save((error, result) => {
            if (error) res.status(500).send({
                message: error.message
            })
            else res.send({
                message: 'Succesfully Added a Product!!',
                result
            })
        });
    }
    // res.status(200).send({
    //     message: 'Handling POST req to products!!',
    //     CreatedProduct: product
    // });    
});

router.get('/:productid', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Fetching Product ID',
    //     id : req.params.productid
    // });
    productModel.findById(req.params.productid, (error, result) => {
        if (error) {
            res.status(500).json({
                message: error.message
            });
        } else {
            res.status(200).json({
                message: 'Fetched the data!',
                result
            });
        }
    });

});

router.patch('/:id', (req, res, next) => {
    // res.send({
    //     message: 'Updating the page!'
    // });
    productModel.update({_id:req.params.id}, {$set:{name:req.body.name, price:req.body.price}}, (error, result) => {
        if(error){
            res.status(500).json({
                message: error.message
            });
        }else{
            res.status(200).json({
                message:'Succefully Updated',
                result
            });
        }
    });
});

router.delete('/:id', (req, res, next) => {
    // res.send({
    //     message: 'Deleting the page!'
    // });
    productModel.remove({ _id: req.params.id }, (error, result) => {
        if (error) {
            res.status(500).json({
                message: error.message
            });
        } else {
            res.status(200).json({
                message: 'Succefully Removed',
                result
            });
        }
    })
});


module.exports = router;

