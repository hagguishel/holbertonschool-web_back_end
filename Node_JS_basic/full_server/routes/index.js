import { Router } from 'express';
import AppController from '../controllers/AppController.js';

const router = Router();

router.get('/', AppController.getHomepage);

export default router;
