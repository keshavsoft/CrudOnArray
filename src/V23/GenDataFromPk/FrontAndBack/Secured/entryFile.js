const vscode = require('vscode');

const CommonRegisterCommand = "GenDataFromPk.FrontAndBack";

const { StartFunc: StartFuncFromOnlyBackEnd } = require("../../OnlyBackEnd/Secured/funcToActivate");
const { StartFunc: StartFuncFromServerRun } = require("./serverRun");
const { StartFunc: StartFuncFromCopyNeeded } = require("./CopyNeeded/entryFile");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();

    let LocalVersion = await StartFuncFromOnlyBackEnd({ inToPath: LocalToPath });

    if (LocalVersion === false) {
        return false;
    };

    StartFuncFromCopyNeeded({ inToPath: LocalToPath });

    StartFuncFromServerRun(LocalToPath);
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
