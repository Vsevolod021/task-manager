import { Desk } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class DeskController {
    async create(req, res, next) {
        try {
            const { name, userId } = req.body;
            const desk = await Desk.create({ name, userId });
            return res.json(desk);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const desk = await Desk.findOne({
                where: { id },
            });
            return res.json(desk);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            let { userId } = req.query;
            let desks = await Desk.findAll({
                where: { userId },
            });
            return res.json(desks);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

export default new DeskController();
