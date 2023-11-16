// import express library
const express = require('express');

const server = express();
server.use(express.json());

// default - get

server.get('/', (req, res) => {
    console.log("We got a get 789");
    console.log("req", req.query);
    res.json(req.query);
    // res.send(`This is my get 321 ${req.query.name}`);
});

server.post('/', (req, res) => {
    console.log("req", req.body);
    // res.send("This is a post" + req.body);
    res.json(req.body);
});

server.post('/sum', (req, res) => {
    console.log(req.body.input1);
    res.json({
        "sum": parseInt(req.body.input1) + parseInt(req.body.input2)
    });
});

server.delete('/:id', (req, res) => {
    console.log(req.params.id);

    res.json({
        "deleted": req.params.id
    });
});

server.listen(8001, () => {
    console.log('Server is started and listening on port 8001')
});