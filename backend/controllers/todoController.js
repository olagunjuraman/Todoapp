const Todo = require("../models/todoModel");
const Boom = require("boom");

module.exports = {
  async createTodo(req, reply) {
    const { text, day, reminder } = req.payload;
    const todo = {
      text,
      day,
      reminder,
    };
    try {
      const savedTodo = await Todo.create(todo);
      return reply.response(savedTodo);
    } catch (err) {
      return err;
    }
  },

  async getTodos(req, reply) {
    try {
      const todos = await Todo.find({});
      return reply.response(todos);
    } catch (err) {
      return err
    }
  },

  async getTodo(req, reply) {
    const id = req.params.id;
    try {
      const todo = await Todo.findById(id);
      return reply.response(todo);
    } catch (err) {
      return Boom.notFound("Cannot find the requested id");
    }
  },

  async updateTodo(req, reply) {
    const { reminder } = req.payload;
    try {
      if (!req.params.id) {
        return reply({ err: "id is required param" }).code(400);
      }
      const todo = await Todo.findById(req.params.id);
      todo.reminder = reminder;
      await todo.save();
      return reply.response(todo);
    } catch (err) {
      return Boom.notFound("Cannot find the requested id");
    }
  },

  async deleteTodo(req, reply) {
    try {
      if (!req.params.id) {
        return reply({ err: "id is required param" }).code(400);
      }
      await Todo.findByIdAndRemove(req.params.id);

      return reply.response({
        msg: `company has deleted with id ${req.params.id}`,
      });
    } catch (error) {
      return Boom.notFound("Cannot find the requested id");
    }
  },
};
