import express from 'express';
const router = express.Router();

import { router as routerFromRowFilter } from "./1.RowFilter/routes.js";

router.use("/RowFilter", routerFromRowFilter);

export { router };