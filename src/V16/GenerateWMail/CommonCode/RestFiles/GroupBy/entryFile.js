const fs = require('fs');
const { StartFunc: StartFuncFromSingleColumn } = require('./SingleColumn');
const { StartFunc: StartFuncFromSingleColLength } = require('./SingleColLength');
const { StartFunc: StartFuncFromSetSingleColumn } = require('./SetSingleColumn');
const { StartFunc: StartFuncFromSum } = require('./Sum');
const { StartFunc: StartFuncFromSingleColumnSum } = require('./SingleColumnSum');

const handlers = {
    "1.SingleColumn.http": StartFuncFromSingleColumn,
    "2.SingleColLength.http": StartFuncFromSingleColLength,
    "3.SetSingleColumn.http": StartFuncFromSetSingleColumn,
    "4.Sum.http": StartFuncFromSum,
    "5.SingleColumnSum.http": StartFuncFromSingleColumnSum
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
