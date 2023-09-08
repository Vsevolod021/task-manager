import { WorkSprint, Desk } from '../models/models.js';

import ApiError from '../error/ApiError.js';

class WorkSprintController {
    async create(req, res, next) {
        try {
            const { name, startDate, endDate, deskId } = req.body;

            const desk = await Desk.findOne({
                where: { id: deskId },
            });

            if (!desk) {
                return next(ApiError.badRequest('Доски с таким id не существует'));
            }

            const workSprint = await WorkSprint.create({ name, startDate, endDate, deskId });

            return res.json(workSprint);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async change(req, res, next) {
        try {
            const { id, name, startDate, endDate } = req.body;

            const workSprint = await WorkSprint.findOne({
                where: { id },
            });

            if (!workSprint) {
                return next(ApiError.badRequest('Рабочего спринта с таким id не существует'));
            }

            workSprint.update({
                name,
                startDate,
                endDate,
            });

            return res.json(workSprint);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const workSprint = await WorkSprint.findOne({
                where: { id },
            });

            if (!workSprint) {
                return next(ApiError.badRequest('Рабочего спринта с таким id не существует'));
            }

            return res.json(workSprint);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const { deskId } = req.query;

            if (!deskId) {
                return next(ApiError.badRequest('Доски с таким id не существует'));
            }

            let workSprints = await WorkSprint.findAll({
                where: { deskId },
            });

            if (!workSprints.length) {
                return next(ApiError.badRequest('У доски с таким id рабочие спринты еще не созданы'));
            }

            return res.json(workSprints);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new WorkSprintController();
