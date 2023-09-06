import express from 'express';
import siteController from '../app/controllers/SiteControllers.js';

const router = express.Router();

router.get('/search', siteController.search);

router.get('/', siteController.app); // từ trên xuống nếu để đầu thì sẽ lao vào luôn

export default router;