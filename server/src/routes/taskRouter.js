import { Router } from 'express';

import taskController from '../controllers/taskController.js';

const router = new Router();

router.post('/create', taskController.create);
router.post('/change-condition', taskController.changeCondition);
router.post('/change-info', taskController.changeInfo);
router.get('/:id', taskController.getOne);
router.get('/', taskController.getAll);

export default router;
