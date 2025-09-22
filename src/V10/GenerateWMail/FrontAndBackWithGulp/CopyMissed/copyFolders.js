const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { StartFunc: StartFuncFromChecks } = require('./checks');

const StartFunc = ({ inToPath }) => {
    LocalFuncForMail({ inToPath });
    LocalFuncForSecret({ inToPath });
};

const LocalFuncForMail = ({ inToPath }) => {
    try {
        const LocalToPath = path.join(inToPath, "Mail");
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {

            const LocalFromPath = path.join(__dirname, "..", "CopyCode", "Mail");

            fse.copySync(LocalFromPath, LocalToPath);
        };

        return true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncForSecret = ({ inToPath }) => {
    const LocalFolderName = "Secret";

    try {
        const LocalToPath = path.join(inToPath, LocalFolderName);
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {

            const LocalFromPath = path.join(__dirname, "..", "CopyCode", LocalFolderName);

            fse.copySync(LocalFromPath, LocalToPath);
        };

        return true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };