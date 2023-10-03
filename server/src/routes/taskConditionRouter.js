import { Router } from 'express';

import taskConditionController from '../controllers/taskConditionController.js';

const router = new Router();

router.post('/create', taskConditionController.create);
router.get('/:id', taskConditionController.getOne);
router.get('/', taskConditionController.getAll);

export default router;
