const vscode = require('vscode');
const fs = require('fs');

const { StartFunc: StartFuncFromForMaxVersion } = require("./ForMaxVersion/entryFile");
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");
const { StartFunc: StartFuncFromGetMaxVersion } = require("./getMaxVersion");
const { StartFunc: StartFuncFromLastRun } = require("./LastRun/entryFile");
// const { StartFunc: StartFuncrunNodeApp } = require("./serverRun");

const StartFunc = async ({ inToPath }) => {
    const LocalToPath = inToPath;

    const LocalVersionSecured = await LocalFuncForSecureEndPoints({ inToPath });

    if (LocalVersionSecured === false) return false;

    StartFuncFromLastRun({
        filePath: `${LocalToPath}/app.js`,
        inNewVersionProtected: LocalVersionSecured,
        inToPath: LocalToPath
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
    // StartFuncrunNodeApp(LocalToPath)
};

const LocalFuncForSecureEndPoints = async ({ inToPath }) => {
    const LocalToPath = inToPath;

    let LocalVersionSecured = await LocalFuncForMaxVersion({
        inVersionStart: "SV",
        inToPath
    });

    if (LocalVersionSecured === false) {
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
        inVersion: LocalVersionSecured
    });

    return await LocalVersionSecured;
};

const LocalFuncCheckAppJs = ({ inToPath }) => {
    return fs.existsSync(`${inToPath}/app.js`)
};

const LocalFuncForMaxVersion = async ({ inVersionStart, inToPath }) => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
    let LocalVersion = `${inVersionStart}1`;

    const LocalFromMaxVersion = await StartFuncFromGetMaxVersion({
        inToPath: LocalToPath,
        inVersionStart
    });

    if (LocalFromMaxVersion === 0) {
        if (LocalFuncCheckAppJs({ inToPath }) === false) {
            const LocalFromCopy = await StartFuncFromFirstCopy({ inToPath: LocalToPath });

            if (LocalFromCopy === false) {
                return false;
            };
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
