const { StartFunc: StartFuncFromCommonFuncs } = require('../../CommonFuncs/entryFile');
const vscode = require('vscode');

const StartFunc = ({ inColumnsWithSchema, inTableName, inFromTableJson }) => {
    const LocalColumnsWithSchema = inColumnsWithSchema;
    const LocalTableName = inTableName;
    const LocalFromTableJson = inFromTableJson;

    const LocalFromCheckSchema = StartFuncFromCommonFuncs({
        inColumnsAsArray: LocalColumnsWithSchema,
        inTableName: LocalTableName
    });

    if (LocalFromCheckSchema === false) {
        // vscode.window.showInformationMessage(`field contains invalid char : ${tableName}`);
        return false;
    };

    if ("Secured" in LocalFromTableJson === false) {
        vscode.window.showInformationMessage(`Secured not found in Json Schema : ${LocalTableName}`);
        return false;
    };

    if ("SubRoutes" in LocalFromTableJson.NonSecured === false) {
        vscode.window.showInformationMessage(`SubRoutes not found in Secured of Json Schema : ${LocalTableName}`);
        return false;
    };

    return true;
    //dummy function
};

module.exports = { StartFunc };
