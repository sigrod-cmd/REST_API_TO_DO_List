import { Router } from 'express';
import { data } from '../controllers/index.controllers.js';


const router = Router();

router.get('/', data );

export default router;