import { Desk } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class DeskController {
    async create(req, res) {
        try {
            const { name, userId } = req.body;
            const desk = await Desk.create({ name, userId });
            return res.json(desk);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res) {
        const { id } = req.params;
        const desk = await Desk.findOne({
            where: { id },
        });
        return res.json(desk);
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
