const express = require('express');

const TodoController = require('./controller');

const router = express.Router();

router.get('/', TodoController.getTodo);

router.get('/:id', TodoController.getOne);

router.post('/', TodoController.createAction)

module.exports = router;