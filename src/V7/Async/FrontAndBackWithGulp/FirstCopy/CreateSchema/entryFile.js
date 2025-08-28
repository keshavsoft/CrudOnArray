const vscode = require('vscode');

const { StartFunc: StartFuncFromOpenSchemaJson } = require("../Checks/openSchemaJson");
const { StartFunc: StartFuncFromInsertToFile } = require("./insertToFile");

const StartFunc = async ({ inToPath }) => {
    const LocalToPath = inToPath;
    let GoToHelp = 'Create schema.json';

    vscode.window.showInformationMessage('Click for more Info', GoToHelp)
        .then(selection => {
            if (selection === GoToHelp) {
                StartFuncFromInsertToFile({ inToPath });

                StartFuncFromOpenSchemaJson({ inToPath: LocalToPath });
            };
        });
};

module.exports = { StartFunc };