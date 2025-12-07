import express from 'express';
const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromAsIsReverse } from "./2.AsIsReverse/routes.js";

router.use("/AsIs", routerFromAsIs);//return all original data
router.use("/AsIsReverse", routerFromAsIsReverse);//return all original data

export { router };