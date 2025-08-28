import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromLogout } from "./logout/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/logout", routerFromLogout);

export { router };