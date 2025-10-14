const fs = require('fs');
const { StartFunc: StartFuncFromRowFiler } = require('./RowFiler');
const { StartFunc: StartFuncFromByBody } = require('./ByBody');
const { StartFunc: StartFuncFromByKeyAndValue } = require('./ByKeyAndValue');
const { StartFunc: StartFuncFromBodyInArray } = require('./BodyInArray');

const handlers = {
    "1_RowFilter.http": StartFuncFromRowFiler,
    "2_ByBody.http": StartFuncFromByBody,
    "3_ByKeyAndValue.http": StartFuncFromByKeyAndValue,
    "4_BodyInArray.http": StartFuncFromBodyInArray
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
