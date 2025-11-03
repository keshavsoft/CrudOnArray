import express from 'express';

const router = express.Router();

import { router as routerFromCount } from "./1.Count/routes.js";
import { router as routerFromSum } from "./2.Sum/routes.js";
import { router as routerFromMax } from "./3.Max/routes.js";
import { router as routerFromMin } from "./4.Min/routes.js";
import { router as routerFromAverage } from "./5.Average/routes.js";

router.use("/Count", routerFromCount);// total recors in table
router.use("/Sum", routerFromSum); // sum by exit column 
router.use("/Max", routerFromMax); // get max value by column
router.use("/Min", routerFromMin);// get min value by column
router.use("/Average", routerFromAverage);// get avarage by column

export { router };