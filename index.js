/*
const http = require('http');

const requestCallback = (req, res) => res.end('Hello World');

const server = http.createServer(requestCallback);

server.listen(8080);


const Todo = require('./todo');

const todo = new Todo('Get up', true);

console.log(todo);
todo.toggleStatus();
console.log(todo);
*/

const express = require('express');

const morgan = require('morgan');

const fs = require('fs');

const path = require('path');

const bodyParser = require('body-parser');

const todoRouter = require('./todo');

const app = express();

const stream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {
        flags: 'a'
    }
);

app.use(morgan('combined', { stream }));

app.use(bodyParser.json());

app.listen(8080);

app.use('/todo', todoRouter);