import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromAsIsNoPk } from "./2.AsIsNoPk/routes.js";
import { router as routerFromAsIsAndTS } from "./3.AsIsAndTS/routes.js";
import { router as routerFromColumnExist } from "./4.ColumnExist/routes.js";
import { router as routerFromSchemaColumnsOnly } from "./5.SchemaColumnsOnly/routes.js";
import { router as routerFromDefault } from "./7.Default/routes.js";
import { router as routerFromOnlyDefault } from "./8.OnlyDefault/routes.js";
import { router as routerFromPkReturn } from "./9.PkReturn/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/AsIsNoPk", routerFromAsIsNoPk);
router.use("/AsIsAndTS", routerFromAsIsAndTS);
router.use("/ColumnExist", routerFromColumnExist);
router.use("/SchemaColumnsOnly", routerFromSchemaColumnsOnly);
router.use("/Default", routerFromDefault);
router.use("/OnlyDefault", routerFromOnlyDefault);
router.use("/PkReturn", routerFromPkReturn);

export { router };