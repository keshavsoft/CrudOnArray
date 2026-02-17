import express from 'express';

const router = express.Router();

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";

router.use("/Utility", routerFromUtility);
router.use("/Users", routerFromUsers);

export { router };