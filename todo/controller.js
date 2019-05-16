const todoModel = require('./model');

class TodoController {
    static async getTodo(req, res) {
        /* Variante 1: callback
        todoModel.getAll((data) => {
            res.json(data);
        });
        Variante 2: Promis
        todoModel.getAllPromise().then((data) => res.json(data));
        Variante 3: async/await
        */
        const data = await todoModel.getAllPromise();
        res.json(data);
    }

    static async getOne(req, res) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).send('not found');
        }
        const todo = await todoModel.getOne(id);
        res.json(todo);
    }

    static async createAction(req, res) {
        const result = await todoModel.create(req.body);
        res.json(result);
    }
}

module.exports = TodoController;