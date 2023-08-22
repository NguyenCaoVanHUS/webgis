import express from 'express';
import gisController from '../app/controllers/GisControllers.js';

const router = express.Router();

router.get('/:slug', gisController.show);
router.get('/', gisController.server);
// từ trên xuống nếu để đầu thì sẽ lao vào luôn

export default router;