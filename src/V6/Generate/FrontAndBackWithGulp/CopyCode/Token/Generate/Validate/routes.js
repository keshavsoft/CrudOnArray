import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromLogout } from "./logout/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/logout", routerFromLogout);
router.use("/Users", routerFromUsers);

export { router };