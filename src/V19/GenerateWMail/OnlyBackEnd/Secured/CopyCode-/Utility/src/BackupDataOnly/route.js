import express from 'express';

var router = express.Router();

import { StartFunc as MiddleWaresBinSecured } from "../../../Token/MiddleWares/entryFile.js";

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/', MiddleWaresBinSecured, routergetFuncs);

export { router };