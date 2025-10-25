import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromBulkUpdateByPk } from "./3.BulkUpdateByPk/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/BulkUpdateByPk", routerFromBulkUpdateByPk);

export { router };