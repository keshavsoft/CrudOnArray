import express from 'express';

var router = express.Router();

import { router as routerFromAllFiles } from './AllFiles/route.js';

router.use('/AllFiles', routerFromAllFiles);

export { router };