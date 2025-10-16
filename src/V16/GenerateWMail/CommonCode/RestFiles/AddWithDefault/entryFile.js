const fs = require('fs');
const { StartFunc: StartFuncFromAsIs } = require('./AsIs');
const { StartFunc: StartFuncFromRowDataWithPk } = require('./RowDataWithPk');
const { StartFunc: StartFuncFromSelColsAsArray } = require('./SelColsAsArray');

const handlers = {
    "1_AsIs.http": StartFuncFromAsIs,
    "2_InitRow.http": StartFuncFromRowDataWithPk,
    "3_InsertFromBody.http": StartFuncFromSelColsAsArray
};

async function StartFunc({ inFolder, inTableName, inVersion, inPortNumber, inColumnsAsArray }) {
    const files = fs.readdirSync(inFolder);

    files.forEach(file => {
        const handler = handlers[file];
        if (handler) {
            handler({
                inFilePath: `${inFolder}/${file}`,
                inTableName, inVersion, inPortNumber, inColumnsAsArray
            });
        }
    });
}

module.exports = { StartFunc };
