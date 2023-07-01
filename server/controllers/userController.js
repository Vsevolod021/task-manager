import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import ApiError from '../error/ApiError.js';
import { User } from '../models/models.js';
import models from '../models/models.js';

const generateJwt = (id, email, name) => {
    return jwt.sign({ id, email, name }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
    async registration(req, res, next) {
        const { email, password, name } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, name, password: hashPassword });
        const token = generateJwt(user.id, user.email, user.name);
        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.name);
        return res.json({ token });
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.name);
        return res.json({ token });
    }
}

export default new UserController();
