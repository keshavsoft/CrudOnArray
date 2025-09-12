const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const StartFunc = ({ inToPath }) => {
    try {
        const LocalToPath = path.join(inToPath, "package.json");
        // const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });
        const LocalIfExists = fse.existsSync(LocalToPath);

        if (LocalIfExists) {
            const LocalJsonData = fse.readFileSync(LocalToPath);
            let LocalParsedJson = JSON.parse(LocalJsonData);

            console.log("aaaaaaaaaaaa : ", LocalParsedJson);
        };

        return true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };