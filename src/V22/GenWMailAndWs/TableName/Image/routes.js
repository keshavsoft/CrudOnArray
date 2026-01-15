import express from 'express';

const router = express.Router();

import { router as routerFromPdfFromPk } from "./PdfFromPk/routes.js";

router.use("/PdfFromPk", routerFromPdfFromPk);

export { router };