import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromInitRow } from "./2.InitRow/routes.js";
import { router as routerInsertFromBody } from "./3.InsertFromBody/routes.js";
import { router as routerAddFromDefaultObj } from "./4.AddFromDefaultObj/routes.js";

router.use("/AsIs", routerFromAsIs);// insert table schema fields
router.use("/InitRow", routerFromInitRow); // insert table schme columns if match
router.use("/InsertFromBody", routerInsertFromBody); //insert by key value
router.use("/AddFromDefaultObj", routerAddFromDefaultObj);// insert table schema DefaultObjectToInsert sample

export { router };