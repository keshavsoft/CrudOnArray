const fse = require('fs-extra');
const path = require('path');
const { StartFunc: StartFuncFromRestFiles } = require('../../../CommonCode/RestFiles/enteryFile');

const StartFunc = async ({ inTableName, inSubRoutes, inToPath, inVersion, inPortNumber, inColumnsAsArray }) => {
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

    StartFuncFromRestFiles({
        inFolder: `${LocalToPath}/${LocalVersion}/${LocalTableName}`,
        inTableName, inVersion, inPortNumber, inSubRoutes, inColumnsAsArray
    });

    // for (const LoopSubRoute of inSubRoutes) {
    //     LocalFuncToReplace({
    //         inFileName: `${LocalToPath}/${LocalVersion}/${LocalTableName}/${LoopSubRoute}/RestClients/1_AsIs.http`,
    //         inTableName, inVersion, inPortNumber
    //     });
    // };

    LocalFileDataAsArray.push("");
    LocalFileDataAsArray.push("export { router };");

    fse.writeFileSync(`${LocalToPath}/${LocalVersion}/${LocalTableName}/routes.js`, LocalFileDataAsArray.join("\n"));
};


const LocalFuncToReplace = ({ inFileName, inTableName, inVersion, inPortNumber }) => {
    const filePath = inFileName; // Replace with your file path

    fse.readFile(filePath, 'utf-8', (err, contents) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        };

        let updatedContents = contents.replace(new RegExp("{PortNumber}", 'g'), inPortNumber);
        let updatedContents1 = updatedContents.replace(new RegExp("{Version}", 'g'), inVersion);
        let updatedContents2 = updatedContents1.replace(new RegExp("{TableName}", 'g'), inTableName);

        fse.writeFile(filePath, updatedContents2, 'utf-8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('String replaced successfully in', filePath);
        });
    });
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