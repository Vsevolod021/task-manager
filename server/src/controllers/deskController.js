import { Desk } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class DeskController {
    async create(req, res, next) {
        try {
            const { name, access, userId } = req.body;
            const desk = await Desk.create({ name, access, userId });
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

    async getAll(req, res) {
        let { userId } = req.query;
        let desks = await Desk.findAll({
            where: { userId },
        });
        return res.json(desks);
    }
}

export default new DeskController();
