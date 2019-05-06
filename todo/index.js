const express = require('express');

const router = express.Router();

const todos = require('./todolist');

router.get('/', (req, res) => {
    res.send(todos);
});

router.get('/:id', (req, res) => {
    res.send(todos[req.params.id]);
});

module.exports = router;