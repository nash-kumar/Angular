require('dotenv').config();
const express = require('express');
const app = express();
const moongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

moongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (err) => {
    if(err) console.log("Couldn't connect to DB")
    else console.log('Connected Succesfully!')
});

const user = require('./api/routes/user');

app.get('/', (req, res) => {
    res.send('Welcome TO NODE!');
});

app.use('/users', user);


app.listen(process.env.PORT, () => console.log(`At ${process.env.PORT} Port is Running!`));