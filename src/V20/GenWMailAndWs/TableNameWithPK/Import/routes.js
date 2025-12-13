import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromBulkUpdateByPk } from "./2.BulkUpdateByPk/routes.js";
import { router as routerFromBulkTransformByType } from "./3.BulkTransformByType/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/BulkUpdateByPk", routerFromBulkUpdateByPk);
router.use("/BulkTransformByType", routerFromBulkTransformByType);

export { router };