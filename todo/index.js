const express = require('express');

const todoController = require('./controller');

const router = express.Router();

router.get('/', todoController);

router.get('/:id', todoController);

module.exports = router;