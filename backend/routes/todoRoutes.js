const TodoController = require("../controllers/todoController");

const Joi = require("joi");

const schema = Joi.object().keys({
  text: Joi.string(),
  day: Joi.string(),
  reminder: Joi.boolean(),
});
module.exports = [
  {
    path: "/api/todo",
    method: "POST",
    handler: TodoController.createTodo,
    config: {
      validate: {
        payload: schema,
      },
    },
  },
  {
    path: "/api/todo",
    method: "GET",
    handler: TodoController.getTodos,
  },
  {
    path: "/api/todo/{id}",
    method: "GET",
    handler: TodoController.getTodo,
  },
  {
    path: "/api/todo/{id}",
    method: "DELETE",
    handler: TodoController.deleteTodo,
    config: {
      validate: {
        params: Joi.object().keys({
          id: Joi.string().required(),
        }),
      },
    },
  },
  {
    path: "/api/todo/{id}",
    method: "PUT",
    handler: TodoController.updateTodo,
    config: {
      validate: {
        params: Joi.object().keys({
          id: Joi.string().required(),
        }),
      },
    },
  },
];
