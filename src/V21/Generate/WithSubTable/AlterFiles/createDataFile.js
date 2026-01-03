const fs = require('fs');
const vscode = require('vscode');

async function StartFunc({ inTableName, inData }) {
    try {
        const LocalTableName = inTableName;
        const LocalRootPath = LocalFuncGetWorkSpaceFolder();

        fs.writeFileSync(`${LocalRootPath}/Data/${LocalTableName}.json`, JSON.stringify(inData), 'utf-8');

    } catch (err) {
        console.error('Error reading directory:', err);
    };
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
