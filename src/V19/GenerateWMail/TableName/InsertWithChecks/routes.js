import express from 'express';

const router = express.Router();

import { router as routerFromForUnique } from "./1.ForUnique/routes.js";
import { router as routerFromForUniqueAndImage } from "./2.ForUniqueAndImage/routes.js";
import { router as routerFromForPkReturn } from "./3.PkReturn/routes.js";

router.use("/ForUnique", routerFromForUnique);
router.use("/ForUniqueAndImage", routerFromForUniqueAndImage);
router.use("/PkReturn", routerFromForPkReturn);

export { router };