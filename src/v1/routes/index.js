import Router from 'express';
import movieRouter from './movieRoute';

const router = Router();
router.use('/movies', movieRouter);

export default router;
