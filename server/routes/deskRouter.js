import { Router } from 'express';

import deskController from '../controllers/deskController';

const router = new Router();

router.post('/', deskController.create);
router.get('/:id', deskController.getOne);
router.get('/', deskController.getAll);

export default router;