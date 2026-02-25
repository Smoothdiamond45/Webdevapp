'use strict';

import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
