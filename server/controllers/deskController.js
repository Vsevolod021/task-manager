import { Desk } from '../models/models';

class DeskController {
    async create(req, res) {
        const { name, userId } = req.body;
        const brand = await Desk.create({ name, userId });
        return res.json(brand);
    }

    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
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
