import { Router } from 'express';
//rutas
import userRouter  from './userRouter';
import studentRouter from './studentRouter';
import classRouter from './classRouter';

const router = Router();

router.get('/', (_req, res)=>{
    res.send('Server Ok');
});

router.use('/user', userRouter);
router.use('/student', studentRouter);
router.use('/class', classRouter);

export default router;