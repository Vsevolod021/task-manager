import { Router } from 'express';

import userRouter from './userRouter.js';
import deskRouter from './deskRouter.js';
import workspaceRouter from './workspaceRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/desk', deskRouter);
router.use('/workspace', workspaceRouter);

export default router;
