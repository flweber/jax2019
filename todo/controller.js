const todos = require('./todolist');

const Controller = (req, res) => {
    if(req.params.id) return res.json(todos[req.params.id]);
    res.json(todos);
    return;
};

module.exports = Controller;