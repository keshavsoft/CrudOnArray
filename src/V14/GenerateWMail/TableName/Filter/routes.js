import express from 'express';
const router = express.Router();

// import { router as routerFromRowFilter } from "./1.RowFilter/routes.js";
import { router as routerFromByKeyAndValue } from "./2.ByKeyAndValue/routes.js";
import { router as routerFromByBody } from "./2.ByBody/routes.js";

// router.use("/RowFilter", routerFromRowFilter);//filter by key and value
router.use("/ByKeyAndValue", routerFromByKeyAndValue); // filter by key value
router.use("/ByBody", routerFromByBody);// filter data from body string

export { router };