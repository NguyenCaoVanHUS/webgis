import express from 'express';
import siteController from '../app/controllers/SiteControllers.js';

const router = express.Router();

router.use('/search', siteController.search);
router.use('/', siteController.server); // từ trên xuống nếu để đầu thì sẽ lao vào luôn

export default router;