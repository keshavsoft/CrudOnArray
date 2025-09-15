const vscode = require('vscode');

const { StartFunc: StartFuncFromCopyFolders } = require('./copyFolders');
const { StartFunc: StartFuncFromAlterPackageJson } = require('./alterPackageJson');

const StartFunc = ({ inToPath }) => {
    StartFuncFromCopyFolders({ inToPath });
    StartFuncFromAlterPackageJson({ inToPath });

    const terminal = vscode.window.createTerminal({ name: "npm i", cwd: inToPath });

    terminal.sendText('npm i');
};

module.exports = { StartFunc };