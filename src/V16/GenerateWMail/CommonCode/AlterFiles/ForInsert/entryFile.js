const { StartFunc: StartFuncFromForInsertColumnExist } = require("./ForInsertColumnExist/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inPortNumber, inColumnsAsArray, inVersion }) => {
    await StartFuncFromForInsertColumnExist({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });
};

module.exports = { StartFunc };
