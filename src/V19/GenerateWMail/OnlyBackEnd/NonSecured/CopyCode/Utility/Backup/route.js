import express from 'express';

var router = express.Router();

import { router as routerForBackup } from './Complete/route.js';
import { router as routerForBackupDataOnly } from './DataOnly/route.js';
import { router as routerForImagesOnly } from './ImagesOnly/route.js';
// import { router as AdminBackup } from './AdminBackup/route.js';

router.use('/backup', routerForBackup);
router.use('/BackupDataOnly', routerForBackupDataOnly);
router.use('/ImagesOnly', routerForImagesOnly);

// router.use('/AdminBackup', AdminBackup);

export { router };