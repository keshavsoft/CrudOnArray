import express from 'express';
const router = express.Router();

// import { router as routerFromRowFilter } from "./1.RowFilter/routes.js";
import { router as routerFromByBody } from "./2.ByBody/routes.js";
import { router as routerFromByKeyAndValue } from "./3.ByKeyAndValue/routes.js";
import { router as routerFromBodyInArray } from "./1.BodyInArray/routes.js";
import { router as routerFromBetween } from "./4.Between/routes.js";

// router.use("/RowFilter", routerFromRowFilter);//filter by key and value
router.use("/ByKeyAndValue", routerFromByKeyAndValue); 
router.use("/ByBody", routerFromByBody);
router.use("/BodyInArray", routerFromBodyInArray);
router.use("/Between", routerFromBetween); 

export { router };