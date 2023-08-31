import { TaskCondition, Desk } from '../models/models.js';

import ApiError from '../error/ApiError.js';

class TaskConditionController {
    async create(req, res, next) {
        try {
            const { name, deskId } = req.body;

            console.log(name, deskId);

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
}

export default new TaskConditionController();
