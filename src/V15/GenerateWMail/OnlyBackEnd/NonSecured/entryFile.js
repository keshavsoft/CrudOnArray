const vscode = require('vscode');

const CommonRegisterCommand = "GenerateWMail.OnlyBackEnd.NonSecured";

const { StartFunc: StartFuncFromFuncToActivate } = require("./funcToActivate");
const { StartFunc: StartFuncrunNodeApp } = require("./serverRun");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, () => {
        const LocalToPath = LocalFuncGetWorkSpaceFolder();

        StartFuncFromFuncToActivate({ inToPath: LocalToPath });

        StartFuncrunNodeApp(LocalToPath);
    });
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
