import express from 'express';

const router = express.Router();

import { router as routerFromForUnique } from "./1.ForUnique/routes.js";

router.use("/ForUnique", routerFromForUnique);

export { router };