import { Router } from 'express';

import userRouter from './userRouter.js';
// import deskRouter from './deskRouter.js';

const router = new Router();

router.use('/user', userRouter);
// router.use('/desk', deskRouter);

export default router;
