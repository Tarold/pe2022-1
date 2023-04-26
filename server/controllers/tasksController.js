const _ = require('lodash');
const createError = require('http-errors');
const { Task, User } = require('./../models');

module.exports.getTasks = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const foundTasks = await Task.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
      include: {
        model: User,
        attributes: ['firstName', 'lastName'],
      },
    });

    res.status(200).send({ data: foundTasks });
  } catch (e) {
    next(e);
  }
};

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    const createdTask = await Task.create(body);

    const preparedTask = _.omit(createdTask.get(), ['createdAt', 'updatedAt']);
    res.status(201).send({ data: preparedTask });
  } catch (e) {
    next(e);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  const { taskId } = req.params;

  try {
    const foundTask = await Task.findByPk(taskId, {
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!foundTask) {
      return next(createError(404, 'Task Not Found'));
    }
    res.status(200).send({ data: foundTask });
  } catch (e) {
    next(e);
  }
};

module.exports.updateTaskById = async (req, res, next) => {
  const {
    body,
    params: { taskId },
  } = req;

  try {
    const [, [updatedTask]] = await Task.update(body, {
      raw: true,
      where: { id: taskId },
      returning: true,
    });

    if (!updatedTask) {
      return next(createError(404, 'Task Not Found'));
    }

    const preparedTask = _.omit(updatedTask, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedTask });
  } catch (e) {
    next(e);
  }
};

module.exports.updateOrCreateTaskById = async (req, res, next) => {
  const {
    body,
    params: { taskId },
  } = req;

  try {
    const [, [updatedTask]] = await Task.update(body, {
      raw: true,
      where: { id: taskId },
      returning: true,
    });

    if (!updatedTask) {
      body.id = taskId;
      return next();
    }

    const preparedTask = _.omit(updatedTask, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedTask });
  } catch (e) {
    next(e);
  }
};

module.exports.deleteTaskById = async (req, res, next) => {
  const { taskId } = req.params;

  try {
    const deletedTasksCount = await Task.destroy({ where: { id: taskId } });

    if (!deletedTasksCount) {
      return next(createError(404, 'Task Not Found'));
    }

    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
