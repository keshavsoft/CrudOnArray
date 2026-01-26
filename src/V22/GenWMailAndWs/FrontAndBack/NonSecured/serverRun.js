const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const CommonTermName = 'npm run start';

const StartFunc = (dirPath) => {
    LocalFuncDispose();

    const terminal = vscode.window.createTerminal({ name: CommonTermName, cwd: dirPath });

    LocalFuncShowTerminal({ inTerminal: terminal });
    LocalFuncForNPM({ inDirPath: dirPath, inTerminal: terminal });

    // terminal.sendText(`.\\BatchFiles\\generateApiVersion.bat`);
    // terminal.sendText(`.\\GulPHBSFrontEndNonSec.bat`);

    terminal.sendText(`node .\\ForFrontEnd\\UnSecured\\latestVersion.js`);
    terminal.sendText(`node .\\ForFrontEnd\\UnSecured\\Build\\entryFile.js`);

    terminal.sendText(CommonTermName);
};

const LocalFuncDispose = () => {
    const term = vscode.window.terminals.find(t => t.name === CommonTermName);

    if (term) term.dispose();
};

const LocalFuncShowTerminal = ({ inTerminal }) => {
    inTerminal.show(true);
};

const LocalFuncForNPM = ({ inDirPath, inTerminal }) => {
    if (!fs.existsSync(path.join(inDirPath, 'node_modules'))) {
        inTerminal.sendText('npm i');
    };
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootFolderName = vscode.workspace.workspaceFolders[0].name;
        return rootFolderName;
    } else {
        console.log("No workspace folders found.");
    };
};

module.exports = { StartFunc };
