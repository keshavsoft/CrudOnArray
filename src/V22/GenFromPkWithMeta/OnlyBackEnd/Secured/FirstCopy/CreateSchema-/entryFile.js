const vscode = require('vscode');

const { StartFunc: StartFuncFromOpenSchemaJson } = require("../Checks/openSchemaJson");
const { StartFunc: StartFuncFromInsertToSchemaFile } = require("./insertToSchemaFile");
const { StartFunc: StartFuncFromCopyJsonFiles } = require("./copyJsonFiles");
const { StartFunc: StartFuncFromInsertToApiFile } = require("./insertToApiFile");

const StartFunc = async ({ inToPath }) => {
    const LocalToPath = inToPath;
    let GoToHelp = 'Create schema.json';

    vscode.window.showInformationMessage('Click for more Info', GoToHelp)
        .then(selection => {
            if (selection === GoToHelp) {
                StartFuncFromInsertToSchemaFile({ inToPath });
                StartFuncFromInsertToApiFile({ inToPath });

                StartFuncFromCopyJsonFiles({ inToPath });

                StartFuncFromOpenSchemaJson({ inToPath: LocalToPath });
            };
        });
};

module.exports = { StartFunc };