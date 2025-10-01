// extension.js
const vscode = require('vscode');

const { StartFunc: StartFuncV13 } = require('./src/V13/entryFile');

const activate = async (context) => {
    console.log('Congratulations, your extension "create-folder" is now active!');
    StartFuncV13();

    vscode.commands.registerCommand("extension.Path", () => {
        vscode.window.showInformationMessage(__dirname);
    });
};

function deactivate() { };

module.exports = {
    activate,
    deactivate,
};