const fse = require('fs-extra');
const path = require('path');

const StartFunc = async ({ inTableName, inSubRoutes, inToPath, inVersion }) => {
    const LocalTableName = inTableName;
    const LocalVersion = inVersion;

    const LocalToPath = inToPath;

    const LocalFromTablePath = path.join(__dirname, "..", "..", "..", "TableName");

    let LocalFileDataAsArray = [];
    LocalFileDataAsArray.push("import express from 'express';");
    LocalFileDataAsArray.push("");
    LocalFileDataAsArray.push("const router = express.Router();");
    LocalFileDataAsArray.push("");

    fse.copySync(`${LocalFromTablePath}/CommonFuncs`, `${LocalToPath}/${LocalVersion}/${LocalTableName}/CommonFuncs`);

    for (const LoopSubRoute of inSubRoutes) {
        fse.copySync(`${LocalFromTablePath}/${LoopSubRoute}`, `${LocalToPath}/${LocalVersion}/${LocalTableName}/${LoopSubRoute}`);
    };

    for (const LoopSubRoute of inSubRoutes) {
        LocalFileDataAsArray.push(`import { router as routerFrom${LoopSubRoute} } from "./${LoopSubRoute}/routes.js"`);
    };

    LocalFileDataAsArray.push("");

    for (const LoopSubRoute of inSubRoutes) {
        LocalFileDataAsArray.push(`router.use("/${LoopSubRoute}", routerFrom${LoopSubRoute});`);
    };

    LocalFileDataAsArray.push("");
    LocalFileDataAsArray.push("export { router };");

    fse.writeFileSync(`${LocalToPath}/${LocalVersion}/${LocalTableName}/routes.js`, LocalFileDataAsArray.join("\n"));
};







// import { router as routerFromRead } from "./Read/routes.js";

// router.use("/Read", routerFromRead);

// export { router };

// module.exports = { StartFunc };

// import express from 'express';

// const router = express.Router();

// import { router as routerFromRead } from "./Read/routes.js";

// router.use("/Read", routerFromRead);

// export { router };

module.exports = { StartFunc };