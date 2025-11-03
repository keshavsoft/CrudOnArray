import express from 'express';

const router = express.Router();

import { router as routerFromSingleColLength } from "./2.SingleColLength/routes.js";
import { router as routerFromSingleColumn } from "./1.SingleColumn/routes.js";
import { router as routerFromSetSingleColumn } from "./3.SetSingleColumn/routes.js";
import { router as routerFromSum } from "./4.Sum/routes.js";
import { router as routerFromSingleColumnSum } from "./5.SingleColumnSum/routes.js";

router.use("/SingleColLength", routerFromSingleColLength);// group lenght by column 
router.use("/SingleColumn", routerFromSingleColumn); // group by column
router.use("/SetSingleColumn", routerFromSetSingleColumn); // only return single value group by column 
router.use("/Sum", routerFromSum); // return sum vaules ,send throught array 
router.use("/SingleColumnSum", routerFromSingleColumnSum);

export { router };