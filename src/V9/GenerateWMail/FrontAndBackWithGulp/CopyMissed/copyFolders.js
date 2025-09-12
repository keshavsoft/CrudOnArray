const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { StartFunc: StartFuncFromChecks } = require('./checks');

const StartFunc = async ({ inToPath }) => {
    try {
        const LocalToPath = path.join(inToPath, "Mail");
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {

            const LocalFromPath = path.join(__dirname, "..", "CopyCode", "Mail");

            await fse.copy(LocalFromPath, LocalToPath);
        };

        return await true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };