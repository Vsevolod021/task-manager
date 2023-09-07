import { Task, TaskInfo, WorkSprint, TaskCondition } from '../models/models.js';

import ApiError from '../error/ApiError.js';

class TaskController {
    // Создание задачи
    async create(req, res, next) {
        try {
            const { title, sprintId, conditionId } = req.body;

            // Провера полученных данных

            const workSprint = await WorkSprint.findOne({
                where: { id: sprintId },
            });

            const condition = await TaskCondition.findOne({
                where: { id: conditionId },
            });

            if (!workSprint) {
                return next(ApiError.badRequest('Спринта с таким id не существует'));
            }

            if (!condition) {
                return next(ApiError.badRequest('Состояния с таким id не существует'));
            }

            if (!title) {
                return next(ApiError.badRequest('Введите название задачи'));
            }

            if (workSprint?.deskId !== condition?.deskId) {
                next(ApiError.badRequest('Задачи с таким id в данной доске нет'));
            }

            let task = await Task.create({ workSprintId: sprintId, taskConditionId: conditionId });

            let taskInfo = await TaskInfo.create({ title, infoId: task.id, taskId: task.id });

            return res.json(task);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменение состояния задачи
    async changeCondition(req, res, next) {
        try {
            const { id, conditionId } = req.body;

            let task = await Task.findOne({
                where: { id },
            });

            if (!task) {
                return next(ApiError.badRequest('Доски с таким id нет'));
            }

            let currentCondition = await TaskCondition.findOne({
                where: { id: task.taskConditionId },
            });

            let newCondition = await TaskCondition.findOne({
                where: { id: conditionId },
            });

            if (currentCondition.deskId !== newCondition.deskId) {
                return next(ApiError.badRequest('Такого состояния в текущей доске нет'));
            }

            task.update({
                taskConditionId: conditionId,
            });

            return res.json(task);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    // Изменение данных о задаче
    async changeInfo(req, res, next) {
        try {
            const { title, description, executor, priority, taskId } = req.body;

            let taskInfo = await TaskInfo.findOne({ where: { id: taskId } });

            if (!taskInfo) {
                return next(ApiError.badRequest('Задача с таким id не найдена'));
            }

            taskInfo.update({
                title: title,
                description: description,
                executor: executor,
                priority: priority,
            });

            return res.json(taskInfo);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    // Получение данных об одной задаче
    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const task = await Task.findOne({
                where: { id },
                include: { model: TaskInfo, as: 'info' },
            });

            if (!task) {
                return next(ApiError.badRequest('Задачи в таким id не существует'));
            }

            return res.json(task);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    // Получение всех задач в конкретном спринте и состоянии
    async getAll(req, res, next) {
        try {
            const { workSprintId, taskConditionId } = req.query;

            if (!workSprintId) {
                return next(ApiError.badRequest('Спринта с таким id не существует'));
            }
            if (!taskConditionId) {
                return next(ApiError.badRequest('Состояния с таким id не существует'));
            }

            const tasks = await Task.findAll({
                where: { workSprintId, taskConditionId },
                include: [{ model: TaskInfo, as: 'info' }],
            });

            return res.json(tasks);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new TaskController();
