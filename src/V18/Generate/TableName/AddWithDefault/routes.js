import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromInitRow } from "./2.InitRow/routes.js";
import { router as routerInsertFromBody } from "./3.InsertFromBody/routes.js";
import { router as routerAddFromDefaultObj } from "./4.AddFromDefaultObj/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/InitRow", routerFromInitRow);
router.use("/InsertFromBody", routerInsertFromBody);
router.use("/AddFromDefaultObj", routerAddFromDefaultObj);

export { router };