const vscode = require('vscode');
const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
const { StartFunc: StartFuncFromForUserTableCheck } = require("./forUserTableCheck");

const StartFunc = ({ inRootPath }) => {
    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath });

    let LocalReturnObject = {};
    LocalReturnObject.KTF = false;

    if (LocalEnvFileAsJson == null) {
        vscode.window.showInformationMessage(`.env file not present...`);

        return LocalReturnObject;
    };

    let LocalFromUserCheck = StartFuncFromForUserTableCheck({
        inToPath: inRootPath
    });

    if (LocalFromUserCheck === false) {
        vscode.window.showInformationMessage(`UsesTable has rows with out DataPk...`);

        return LocalReturnObject;
    };

    LocalReturnObject.DataPath = LocalEnvFileAsJson.DataPath ? LocalEnvFileAsJson.DataPath : "";
    LocalReturnObject.PortNumber = LocalEnvFileAsJson.PORT ? LocalEnvFileAsJson.PORT : "";
    LocalReturnObject.KTF = true;

    return LocalReturnObject;
};

module.exports = { StartFunc };