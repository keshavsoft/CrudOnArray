const vscode = require('vscode');

const CommonRegisterCommand = "GenerateWMail.OnlyFrontEnd";

const { StartFunc: StartFuncFromForMaxVersion } = require("./ForMaxVersion/entryFile");

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");

const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");

const { StartFunc: StartFuncFromGetMaxVersion } = require("./getMaxVersion");
const { StartFunc: StartFuncrunNodeApp } = require("./ServerRun");

// const { updateServerFile: updateServerFileFromAppFile } = require("./AppFile/entryFile");
const { updateServerFile: updateServerFileFromAppFile } = require("../CommonCode/AppFile/entryFile");

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