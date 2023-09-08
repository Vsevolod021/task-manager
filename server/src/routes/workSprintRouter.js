import { Router } from 'express';

import workSprintController from '../controllers/workSprintController.js';

const router = new Router();

router.post('/create', workSprintController.create);
router.post('/change', workSprintController.change);
router.get('/:id', workSprintController.getOne);
router.get('/', workSprintController.getAll);

export default router;
