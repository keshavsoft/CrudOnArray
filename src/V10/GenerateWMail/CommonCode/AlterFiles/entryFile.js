const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./AlterRestFiles/entryFile");
const { StartFunc: StartFuncFromForGetColumnsAsArray } = require("./ForGetColumnsAsArray/entryFile");
const { StartFunc: StartFuncFromForAlterWithColumns } = require("./ForAlterWithColumns/entryFile");

const { StartFunc: StartFuncFromForInsert } = require("./ForInsert/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray, inVersion, inColumnsWithSchema, inData }) => {
    const LocalVersion = inVersion;

    StartFuncFromReadParams({
        inEditorPath, inTableName, inDataPath,
        inVersion: LocalVersion,
        inColumnsAsArray, inColumnsWithSchema
    });

    await StartFuncFromAlterRestFiles({
        inEditorPath, inTableName, inPortNumber, inVersion,
        inColumnsAsArray
    });

    await StartFuncFromForGetColumnsAsArray({ inEditorPath, inTableName, inPortNumber, inVersion });

    await StartFuncFromForInsert({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });

    await StartFuncFromForAlterWithColumns({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });
};

module.exports = { StartFunc };
