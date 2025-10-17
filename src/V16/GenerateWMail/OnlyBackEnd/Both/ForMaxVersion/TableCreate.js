const vscode = require('vscode');

const { StartFunc: StartFuncFromRouteUse } = require("../RouteUse/entryFile");
const { StartFunc: StartFuncFromAlterFiles } = require('../../../CommonCode/AlterFiles/entryFile');
const { StartFunc: StartFuncFromCopyNeededOnly } = require("./copyNeededOnly");

const StartFunc = async ({ inTableName, inColumnsAsArray, inSubRoutes, inDataPath, inPortNumber, inToPath, inColumnsWithSchema, inData, inVersion }) => {
    const LocalTableName = inTableName;
    const LocalColumnsAsArray = inColumnsAsArray;
    const LocalDataPath = inDataPath;
    const LocalPortNumber = inPortNumber;
    const LocalVersion = inVersion;

    const LocalToPath = inToPath;
    StartFuncFromCopyNeededOnly({ inTableName, inSubRoutes, inToPath, inVersion, inPortNumber, inColumnsAsArray });

    try {
        StartFuncFromRouteUse({
            inEditorPath: `${LocalToPath}/${LocalVersion}/routes.js`,
            inNewRoute: LocalTableName,
            inVersion: LocalVersion,
            inSubRoutes
        });
        
        // some api alter files creation
        await StartFuncFromAlterFiles({
            inEditorPath: LocalToPath, inTableName: LocalTableName,
            inDataPath: LocalDataPath, inPortNumber: LocalPortNumber,
            inColumnsAsArray: LocalColumnsAsArray, inVersion: LocalVersion,
            inColumnsWithSchema, inData
        });

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };