import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../Controllers/entryFile.js';

import { StartFunc as StartFuncFromMiddlewares } from "../Middlewares/entryFile.js";


router.get('/:fromDate/:toDate/:dateField', StartFuncFromMiddlewares, GetFunc);

export { router };