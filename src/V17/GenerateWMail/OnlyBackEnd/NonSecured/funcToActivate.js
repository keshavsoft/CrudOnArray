const vscode = require('vscode');

const { StartFunc: StartFuncFromForMaxVersion } = require("./ForMaxVersion/entryFile");
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");
const { StartFunc: StartFuncFromGetMaxVersion } = require("./getMaxVersion");
const { StartFunc: StartFuncFromLastRun } = require("./LastRun/entryFile");
// const { StartFunc: StartFuncrunNodeApp } = require("./serverRun");

const StartFunc = async ({ inToPath }) => {
    const LocalToPath = inToPath;

    let LocalVersion = await LocalFuncForNonSecureEndPoints({ inToPath });

    if (LocalVersion === false) {
        return await false;
    };

    StartFuncFromLastRun({
        filePath: `${LocalToPath}/app.js`,
        newVersion: LocalVersion,
        inToPath: LocalToPath
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
    // StartFuncrunNodeApp(LocalToPath)
};

const StartFunc_Keshav_26Oct2025 = async ({ inToPath }) => {
    const LocalToPath = inToPath;

    let LocalVersion = await LocalFuncForMaxVersion({ inVersionStart: "V" });

    if (LocalVersion === false) {
        return false;
    };

    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });

    if (LocalEnvFileAsJson == null) {
        vscode.window.showInformationMessage(`.env file not present...`);

        return false;
    };

    const LocalDataPath = LocalEnvFileAsJson.DataPath ? LocalEnvFileAsJson.DataPath : "";
    const LocalPortNumber = LocalEnvFileAsJson.PORT ? LocalEnvFileAsJson.PORT : "";

    await StartFuncFromForMaxVersion({
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath,
        inVersion: LocalVersion
    });

    StartFuncFromLastRun({
        filePath: `${LocalToPath}/app.js`,
        newVersion: LocalVersion,
        inToPath: LocalToPath
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
    // StartFuncrunNodeApp(LocalToPath)
};

const LocalFuncForNonSecureEndPoints = async ({ inToPath }) => {
    const LocalToPath = inToPath;

    let LocalVersion = await LocalFuncForMaxVersion({ inVersionStart: "V" });

    if (LocalVersion === false) {
        return false;
    };

    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });

    if (LocalEnvFileAsJson == null) {
        vscode.window.showInformationMessage(`.env file not present...`);

        return false;
    };

    const LocalDataPath = LocalEnvFileAsJson.DataPath ? LocalEnvFileAsJson.DataPath : "";
    const LocalPortNumber = LocalEnvFileAsJson.PORT ? LocalEnvFileAsJson.PORT : "";

    await StartFuncFromForMaxVersion({
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath,
        inVersion: LocalVersion
    });

    return await LocalVersion;
};

const LocalFuncForMaxVersion = async ({ inVersionStart }) => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
    let LocalVersion = `${inVersionStart}1`;

    const LocalFromMaxVersion = await StartFuncFromGetMaxVersion({
        inToPath: LocalToPath,
        inVersionStart
    });

    if (LocalFromMaxVersion === 0) {
        const LocalFromCopy = await StartFuncFromFirstCopy({ inToPath: LocalToPath });
        //  return LocalFromCopy;

        if (LocalFromCopy === false) {
            // console.log("already present");
            return false;
        };
    } else {
        LocalVersion = `${inVersionStart}${LocalFromMaxVersion}`;
    };

    return LocalVersion;
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        const rootPath = rootUri.fsPath; // Get the file path
        return rootPath;
    } else {
        console.log("No workspace folders found.");
    };
};

module.exports = { StartFunc };
