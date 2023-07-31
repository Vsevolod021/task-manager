import { Router } from 'express';

import workspaceController from '../controllers/workspaceController.js';

const router = new Router();

router.post('/create', workspaceController.create);
router.post('/change', workspaceController.change);
router.get('/', workspaceController.getOne);

export default router;
