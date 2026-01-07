import express from 'express';

var router = express.Router();

import { router as routerFromAsArray } from './AsArray/route.js';

router.use('/AsArray', routerFromAsArray);

export { router };