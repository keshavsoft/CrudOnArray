import express from 'express';
import cookieParser from 'cookie-parser';

// import dotenv from 'dotenv';
// dotenv.config();

const app = express();
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { router as routerFromUtility } from "./Utility/routes.js";
import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/Utility", routerFromUtility);
app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});