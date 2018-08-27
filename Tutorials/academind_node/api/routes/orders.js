const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order GET page !'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order Post Page!',
        createdOrder: order
    });
});

router.get('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order by ID',
        id: req.params.orderid
    });
});

router.patch('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order Updated!'
    });
});

router.delete('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted!'
    });
});

module.exports = router;