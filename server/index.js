// внешний импорт
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

// импорт внутри проекта
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import models from './models/models.js';
import router from './routes/index.js';
import sequelize from './db.js';

config();

const PORT = process.env.PORT ?? 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// обработка ошибок
app.use(ErrorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
