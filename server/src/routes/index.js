import { Router } from 'express';

import userRouter from './userRouter.js';
import deskRouter from './deskRouter.js';
import workspaceRouter from './workspaceRouter.js';
import worksorintRouter from './workSprintRouter.js';
import taskConditionRouter from './taskConditionRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/desk', deskRouter);
router.use('/workspace', workspaceRouter);
router.use('/condition', taskConditionRouter);
router.use('/sprint', worksorintRouter);

export default router;
