import { Router } from 'express';
import OrganizationContoller from '../controllers/OrganizationContoller';

const router = Router();

router.get('/organizations', OrganizationContoller.list);

export default router;
