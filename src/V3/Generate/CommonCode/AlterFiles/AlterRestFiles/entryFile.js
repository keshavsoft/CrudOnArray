const { StartFunc: StartFuncFromReadFolder } = require("./readFolder");
const { StartFunc: StartFuncFromInsertRestFile } = require("./insertRestFile");
const { StartFunc: StartFuncFromReadRestFile } = require("./ReadRestFile");
const { StartFunc: StartFuncFromAlterRestFile } = require("./AlterRestFile");
const { StartFunc: StartFuncFromDeleteRestFile } = require("./DeleteRestFile");
const { StartFunc: StartFuncFromAggregateRestFile } = require("./AggregateRestFile");
const { StartFunc: StartFuncFromSubinsertRestFile } = require("./SubinsertRestFile");
const { StartFunc: StartFuncFromSubReadRestFile } = require("./SubReadRestFile");
const { StartFunc: StartFuncFromSubAlterRestFile } = require("./SubAlterRestFile");
const { StartFunc: StartFuncFromSubDeleteRestFile } = require("./SubDeleteRestFile");
const { StartFunc: StartFuncFromGroupByRestFile } = require("./GroupByRestFile");
const { StartFunc: StartFuncFromFilterRestClient } = require("./FilterRestClient");
const { StartFunc: StartFuncFromAddWithDefaultRestClient } = require("./AddWithDefault.js");

const CommonReadSchemaFolderName = "ReadSchema";
const CommonSubTableFunctions = "SubTable";
const CommonValidateFunctions = "Validate";

async function StartFunc({ inEditorPath, inTableName, inPortNumber, inVersion, inColumnsAsArray }) {
    const LocalVersion = inVersion;

    await StartFuncFromInsertRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Insert`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromReadRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Read`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromAlterRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Alter`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromDeleteRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Delete`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromAggregateRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/AggregateFunctions`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromGroupByRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/GroupBy`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromReadFolder({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonReadSchemaFolderName}/RestClients`,
        inTableName, inPortNumber
    });

    await StartFuncFromSubReadRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Read`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromSubinsertRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Insert`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromSubAlterRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Alter`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromSubDeleteRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonSubTableFunctions}/Delete`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromInsertRestFile({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/${CommonValidateFunctions}/RestClients`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

    await StartFuncFromFilterRestClient({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/Filter`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });
    
     await StartFuncFromAddWithDefaultRestClient({
        inFolderPath: `${inEditorPath}/${LocalVersion}/${inTableName}/AddWithDefault`,
        inTableName, inPortNumber,
        inColumnsAsArray
    });

};

module.exports = { StartFunc };
