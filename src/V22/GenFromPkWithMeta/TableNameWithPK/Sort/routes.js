import express from 'express';
const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromAsIsReverse } from "./2.AsIsReverse/routes.js";
import { router as routerFromAsIsReverseTop10 } from "./3.AsIsReverseTop10/routes.js";

router.use("/AsIs", routerFromAsIs);//return all original data
router.use("/AsIsReverse", routerFromAsIsReverse);//return all original data
router.use("/AsIsReverseTop10", routerFromAsIsReverseTop10);//return all original data

export { router };