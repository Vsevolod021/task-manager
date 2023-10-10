import { TaskCondition, Desk, Task, WorkSprint } from '../models/models.js';

import ApiError from '../error/ApiError.js';

class TaskConditionController {
    async create(req, res, next) {
        try {
            const { name, deskId } = req.body;

            const desk = await Desk.findOne({
                where: { id: deskId },
            });

            if (!desk) {
                return next(ApiError.badRequest('Доски с таким id не существует'));
            }

            const taskCondition = await TaskCondition.create({ name, deskId });

            return res.json(taskCondition);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const condition = await TaskCondition.findOne({
                where: { id },
            });

            if (!condition) {
                return next(ApiError.badRequest('Состояния с таким id не существует'));
            }

            return res.json(condition);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let { deskId } = req.query;

            const desk = await Desk.findOne({
                where: { id: deskId },
            });

            if (!desk) {
                return next(ApiError.badRequest('Доски с таким id не существует'));
            }

            let taskConditions = await TaskCondition.findAll({
                where: { deskId },
            });

            return res.json(taskConditions);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.body;

            const condition = await TaskCondition.findOne({
                where: { id },
            });

            if (!condition) {
                return next(ApiError.badRequest('Состояния с таким id не существует'));
            }

            console.log('hey');

            const task = await Task.findOne({
                where: { taskConditionId: id },
            });

            if (task) {
                return next(ApiError.badRequest('Невозможно удалить состояние, содержащее задачи'));
            }

            await TaskCondition.destroy({ where: { id } });

            return res.json(condition);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new TaskConditionController();
