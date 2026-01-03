import express from 'express';
const router = express.Router();

import { router as routerFromAscending } from "./1.Ascending/routes.js";
import { router as routerFromDescending } from "./2.Descending/routes.js";

router.use("/Ascending", routerFromAscending);
router.use("/Descending", routerFromDescending);


export { router };