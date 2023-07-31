import { Workspace, User } from '../models/models.js';
import ApiError from '../error/ApiError.js';

class WorkSpaceController {
    async create(req, res, next) {
        const { theme, color, userId } = req.body;

        let workspace = await Workspace.findOne({
            where: { userId },
        });

        const user = await User.findOne({
            where: { id: userId },
        });

        if (!user) {
            return next(ApiError.badRequest('Пользоателя с таким id не существует'));
        }
        if (!workspace) {
            workspace = await Workspace.create({ theme, color, userId });
        } else {
            return next(ApiError.badRequest('Workspace у данного пользователя уже существует'));
        }

        return res.json(workspace);
    }
    async change(req, res) {
        const { theme, color, userId } = req.body;
        let workspace = await Workspace.findOne({
            where: { userId },
        });
        workspace.update({
            theme: theme,
            color: color,
        });

        return res.json(workspace);
    }

    async getOne(req, res) {
        const { userId } = req.body;

        let workspace = await Workspace.findOne({
            where: { userId },
        });

        return res.json(workspace);
    }
}

export default new WorkSpaceController();
