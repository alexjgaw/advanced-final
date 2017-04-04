import { Router } from 'express';
import OrganizationController from '../controllers/OrganizationController';

const router = Router();

router.get('/organizations', OrganizationController.list);

router.post('/organizations', OrganizationController.create);

export default router;
