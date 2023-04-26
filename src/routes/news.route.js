import express from 'express';
import newsController from '../app/controllers/NewsControllers.js';

const router = express.Router();

router.use('/:slug', newsController.show);
router.use('/', newsController.server); // từ trên xuống nếu để đầu thì sẽ lao vào luôn

export default router;