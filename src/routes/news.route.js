import express from 'express';
import newsController from '../app/controllers/NewsControllers.js';

const router = express.Router();

router.get('/:slug', newsController.show);
router.get('/', newsController.app);
// từ trên xuống nếu để đầu thì sẽ lao vào luôn

export default router;