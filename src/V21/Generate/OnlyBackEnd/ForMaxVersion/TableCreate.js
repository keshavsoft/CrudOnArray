const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { StartFunc: StartFuncFromRouteUse } = require("../RouteUse/entryFile");
const { StartFunc: StartFuncFromAlterFiles } = require('../../CommonCode/AlterFiles/entryFile');

const StartFunc = async ({ inTableName, inColumnsAsArray, inDataPath, inPortNumber, inToPath, inColumnsWithSchema, inData, inVersion }) => {
    const LocalTableName = inTableName;
    const LocalColumnsAsArray = inColumnsAsArray;
    const LocalDataPath = inDataPath;
    const LocalPortNumber = inPortNumber;
    const LocalVersion = inVersion;

    const LocalToPath = inToPath;

    const LocalFromTablePath = path.join(__dirname, "..", "..", "TableName");

    await fse.copy(LocalFromTablePath, `${LocalToPath}/${LocalVersion}/${LocalTableName}`);

    try {
        StartFuncFromRouteUse({
            inEditorPath: `${LocalToPath}/${LocalVersion}/routes.js`,
            inNewRoute: LocalTableName,
            inVersion: LocalVersion
        });

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