import { Router } from 'express';

import userRouter from './userRouter.js';
import deskRouter from './deskRouter.js';
import taskRouter from './taskRouter.js';
import workspaceRouter from './workspaceRouter.js';
import worksprintRouter from './workSprintRouter.js';
import taskConditionRouter from './taskConditionRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/desk', deskRouter);
router.use('/task', taskRouter);
router.use('/sprint', worksprintRouter);
router.use('/workspace', workspaceRouter);
router.use('/condition', taskConditionRouter);

export default router;
