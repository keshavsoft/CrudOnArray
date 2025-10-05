const vscode = require('vscode');

const CommonRegisterCommand = "GenerateWMail.OnlyFrontEndSecured";

const { StartFunc: StartFuncrunNodeApp } = require("./ServerRun");

// pull the columns schema from the json file referred from schema.json

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();

    StartFuncrunNodeApp(LocalToPath)
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