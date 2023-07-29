import { Desk } from '../models/models';
import ApiError from '../error/ApiError';

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
    async getAll(req, res) {
        let { userId } = req.body;
        let desks = await Desk.findAll({
            where: { userId },
        });
        return res.json(desks);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const desk = await Desk.findOne({
            where: { id },
        });
        return res.json(desk);
    }
}

export default new DeskController();
