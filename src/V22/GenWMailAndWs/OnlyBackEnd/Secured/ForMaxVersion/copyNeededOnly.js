const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');
const CommonRoutesPath = "TableName";

const { StartFunc: StartFuncFromRestFiles } = require('../../../CommonCode/RestFiles/enteryFile');

const StartFunc = async ({ inTableName, inSubRoutes, inToPath, inVersion, inPortNumber, inColumnsAsArray }) => {
    const LocalTableName = inTableName;
    const LocalVersion = inVersion;
    const LocalToPath = inToPath;

    let LocalFileDataAsArray = [];
    LocalFileDataAsArray.push("import express from 'express';");
    LocalFileDataAsArray.push("");
    LocalFileDataAsArray.push("const router = express.Router();");
    LocalFileDataAsArray.push("");

    const LocalLinesFromSubArray = await LocalFuncForSubRoutes({ inTableName, inSubRoutes, inToPath, inVersion });

    LocalFileDataAsArray = [...LocalFileDataAsArray, ...LocalLinesFromSubArray];

    // Rest files Creations
    StartFuncFromRestFiles({
        inFolder: `${LocalToPath}/${LocalVersion}/${LocalTableName}`,
        inTableName, inVersion, inPortNumber, inSubRoutes, inColumnsAsArray
    });

    LocalFileDataAsArray.push("");
    LocalFileDataAsArray.push("export { router };");

    fse.writeFileSync(`${LocalToPath}/${LocalVersion}/${LocalTableName}/routes.js`, LocalFileDataAsArray.join("\n"));
};

const LocalFuncForSubRoutes = async ({ inTableName, inSubRoutes, inToPath, inVersion }) => {
    const LocalTableName = inTableName;
    const LocalVersion = inVersion;
    const LocalToPath = inToPath;

    const LocalFromTablePath = path.join(__dirname, "..", "..", "..", CommonRoutesPath);

    let LocalFileDataAsArray = [];

    fse.copySync(`${LocalFromTablePath}/CommonFuncs`, `${LocalToPath}/${LocalVersion}/${LocalTableName}/CommonFuncs`);

    for (const LoopSubRoute of inSubRoutes) {
        const LoopInsideSourcePath = `${LocalFromTablePath}/${LoopSubRoute}`;

        if (fse.existsSync(LoopInsideSourcePath)) {
            try {
                fse.copySync(LoopInsideSourcePath, `${LocalToPath}/${LocalVersion}/${LocalTableName}/${LoopSubRoute}`);
                console.log('Successfully copied file.');
            } catch (err) {
                console.error('Error during copy:', err);
            }
        } else {
            console.log(`Source file not found at ${LoopInsideSourcePath}. No copy performed.`);
            vscode.window.showErrorMessage(`Error sub Route not found : ${LoopInsideSourcePath}`);
        };
    };

    for (const LoopSubRoute of inSubRoutes) {
        LocalFileDataAsArray.push(`import { router as routerFrom${LoopSubRoute} } from "./${LoopSubRoute}/routes.js"`);
    };

    LocalFileDataAsArray.push("");

    for (const LoopSubRoute of inSubRoutes) {
        LocalFileDataAsArray.push(`router.use("/${LoopSubRoute}", routerFrom${LoopSubRoute});`);
    };

    return LocalFileDataAsArray;
};

module.exports = { StartFunc };