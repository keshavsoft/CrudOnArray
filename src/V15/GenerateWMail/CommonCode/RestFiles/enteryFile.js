const { StartFunc: StartFuncFromRead } = require('./Read/entryFile');
const { StartFunc: StartFuncFromInsert } = require('./Insert/entryFile');
const { StartFunc: StartFuncFromAlter } = require('./Alter/entryFile');
const { StartFunc: StartFuncFromDelete } = require('./Delete/entryFile');
const { StartFunc: StartFuncFromFilter } = require('./Filter/entryFile');
const { StartFunc: StartFuncFromInsertWithChecks } = require('./InsertWithChecks/entryFile');
const { StartFunc: StartFuncFromReadSchema } = require('./ReadSchema/entryFile');

const StartFunc = async ({ inFolder, inTableName, inSubRoutes, inVersion, inPortNumber, inColumnsAsArray }) => {

    for (const LoopSubRoute of inSubRoutes) {

        switch (LoopSubRoute) {
            case "Read":
                StartFuncFromRead({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber
                })
                break;
            case "Insert":
                StartFuncFromInsert({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber, inColumnsAsArray
                })
                break;
            case "Alter":
                StartFuncFromAlter({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber, inColumnsAsArray
                })
                break;
            case "Delete":
                StartFuncFromDelete({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber, inColumnsAsArray
                })
                break;
            case "Filter":
                StartFuncFromFilter({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber, inColumnsAsArray
                })
                break;
            case "InsertWithChecks":
                StartFuncFromInsertWithChecks({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber, inColumnsAsArray
                })
                break;
            case "ReadSchema":
                StartFuncFromReadSchema({
                    inFolder: `${inFolder}/${LoopSubRoute}/RestClients`,
                    inTableName, inVersion, inPortNumber, inColumnsAsArray
                })
                break;

            default:
                break;
        }
    };

};

module.exports = { StartFunc };