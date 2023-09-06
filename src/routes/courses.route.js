import express from 'express';
import courseController from '../app/controllers/CourseControllers.js';

const router = express.Router();

router.get('/:slug', courseController.show);

export default router;