import express from 'express';

var router = express.Router();

import { router as routerFromAllFiles } from './AllFiles/route.js';
import { router as routerFromFromPk } from './FromPk/routes.js';

router.use('/AllFiles', routerFromAllFiles);
router.use('/FromPk', routerFromFromPk);

export { router };