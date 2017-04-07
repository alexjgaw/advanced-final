import { Router } from 'express';
import PublicFigureController from '../controllers/PublicFigureController';

const router = Router();

router.get('/publicfigures', PublicFigureController.list);

router.post('/publicfigures', PublicFigureController.create);

export default router;
