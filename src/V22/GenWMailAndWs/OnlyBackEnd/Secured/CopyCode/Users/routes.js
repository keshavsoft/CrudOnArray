import express from 'express';

const router = express.Router();

import { router as routerFromLogOut } from "./Logout/routes.js";
import { router as routerFromGenByDataPk } from "./GenByDataPk/routes.js";

router.use("/Logout", routerFromLogOut);
router.use("/GenByDataPk", routerFromGenByDataPk);

export { router };