import express from 'express';
import { StartFunc as StartFuncFromMiddleware } from "./MiddleWares/entryFile.js";

var router = express.Router();

// import { StartFunc as MiddleWaresBinSecured } from "../../../Token/MiddleWares/entryFile.js";

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';

router.use('/', StartFuncFromMiddleware, routergetFuncs);

export { router };