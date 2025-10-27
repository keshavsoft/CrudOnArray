import express from 'express';

var router = express.Router();

import { router as routerForBackup } from './Backup/route.js';
// import { router as AdminBackup } from './AdminBackup/route.js';

router.use('/backup', routerForBackup);
// router.use('/AdminBackup', AdminBackup);

export { router };