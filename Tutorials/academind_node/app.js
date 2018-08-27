const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project',{useNewUrlParser: true}, (error, result) =>{
    if(error) console.log('Error in connection!', error);
    else console.log('Data connected!');
});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');

app.use(morgan('dev'));
app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.use(cors());

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});



module.exports = app;