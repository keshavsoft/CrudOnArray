const vscode = require('vscode');
const CommonRegisterCommand = "GenerateWMail.OnlyBackEnd.Both";
const { StartFunc: StartFuncFromForMaxVersion } = require("./ForMaxVersion/entryFile");
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");
const { StartFunc: StartFuncFromGetMaxVersion } = require("./getMaxVersion");
const { StartFunc: StartFuncrunNodeApp } = require("./serverRun");
const { StartFunc: StartFuncFromLastRun } = require("./LastRun/entryFile");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
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

    let LocalVersionSecured = await LocalFuncForMaxVersion({ inVersionStart: "SV" });

    await StartFuncFromForMaxVersion({
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath,
        inVersion: LocalVersionSecured
    });

    StartFuncFromLastRun({
        filePath: `${LocalToPath}/app.js`,
        newVersion: LocalVersion,
        inNewVersionProtected: LocalVersionSecured,
        inToPath: LocalToPath
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
    StartFuncrunNodeApp(LocalToPath)
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

        if (LocalFromCopy === false) {
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
