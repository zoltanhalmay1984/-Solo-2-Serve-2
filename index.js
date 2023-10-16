import express from "express"; //old version is const express = require('express'); this is ECMAScript version "type": module, need to be included in the package.json to make it work
const app = express();

app.get('/', (req, res) => {
    const q = req.query;
    console.log(q);
    res.send(`The spice must flow ${q.name} ! The fact that you are a little ${q.profession} is no excuse.`);
    // console.log(req);
    // console.log(res);
});

app.get('/another-path', (req, res) => {
    res.send('The spice must flow on this channel too!');
});

app.get('/users/:userId', (req, res) => {
    res.send(`The user id is: ${req.params.userId}`);
    console.log(req.params);
});

app.get('/math/:op', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);

    const { op } = req.params;
    console.log(req.params);
    // console.log(req.query);
    // console.log(op);
    const result = op === 'add'
        ? x + y : op === 'subtract'
            ? x - y : op === 'multiply'
                ? x * y : op === 'divide'
                    ? x / y : false;

    const resultObject = {
        numbers: {
            x: x,
            y: y
        },
        operation: op,
        result: result ? result : `Unrecognizable operation name`
    }
    // res.send(result ? `The result is ${result}` : `Unrecognizable operation name`);
    res.send(resultObject);
});

app.listen(3000, () => {
    console.log(`open this link in your browser: http://127.0.0.1:3000`);
    // console.log(`open this link in your browser: http://localhost:3000`);
});