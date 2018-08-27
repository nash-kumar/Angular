// const express = require('express');

// const app = express();
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("Hello Node");
//         res.end();
//     }

//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });
// const port = 3000;
// server.listen(port);
// console.log(`Server is listening on ${port}`);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("HELLO ME!!");
//         res.end();
//     }
// });

// const port = 2800;
// server.listen(port);
// console.log(`Server is listening on port: ${port}`);
require('dotenv').config();

const Joi = require('joi');
const exprees = require('express');
const app = exprees();
app.use(exprees.json());

const arr = [{
    id: 1,
    sub: "Maths"
},
{
    id: 2,
    sub: "Economics"
},
{
    id: 3,
    sub: "Social"
}];

app.get('/', (req, res) =>{
    res.send('Hello Express!');
});
app.get('/stringyfy', (req, res) =>{
    res.send(JSON.stringify([1,2,3]));
});

app.get('/api/:id', (req, res) => {
    // res.send(arr[req.params.id]);
    const arr1 = arr.find(c => c.id === parseInt(req.params.id));
    if (!arr1) res.status(404).send("The page is not found!")
    res.send(arr1);
})

app.get('/api2/array', (req, res) => {
   
    res.send(arr);
})
app.post('/api2/array', (req, res) => {
    const schema = {
        sub: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    
    const nash = {
        id: arr.length + 1,
        sub: req.body.sub
    };
    arr.push(nash);
    res.send(nash);
});

function validateSub(body){
    const schema = {
        sub: Joi.string().min(3).required()
    };

    return Joi.validate(body, schema);
}

app.put('/api2/array/:id', (req, res) => { 
    const arr1 = arr.find(c => c.id === parseInt(req.params.id));
    if (!arr1) res.status(404).send("The page is not found!")

   const {error} = validateSub(req.body); //object destructuring

    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }

    arr1.sub = req.body.sub;
    res.send(arr);
    
})

app.delete('/api2/array/:id', (req, res) => {
    const arr1 = arr.find(c => c.id === parseInt(req.params.id));
    if (!arr1) res.status(404).send("The page is not found!");
    
    const index = arr.indexOf(arr1);
    arr.splice(index, 1);

    res.send(arr1);
})

const port = process.env.PORT;
app.listen(port, () => console.log(`Port is running at ${port}`));