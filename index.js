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

const todoRouter = require('./todo');

const app = express();

app.listen(8080);

app.use('/todo', todoRouter);