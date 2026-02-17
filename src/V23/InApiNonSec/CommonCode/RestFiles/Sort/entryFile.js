const fs = require('fs');
const { StartFunc: StartFuncFromAsIs } = require('./AsIs');
const { StartFunc: StartFuncFromAsIsReverse } = require('./AsIsReverse');
const { StartFunc: StartFuncFromAsIsReverseTop10 } = require('./asIsReverseTop10');

const handlers = {
    "1_AsIs.http": StartFuncFromAsIs,
    "2_AsIsReverse.http": StartFuncFromAsIsReverse,
    "3_AsIsReverseTop10.http": StartFuncFromAsIsReverseTop10
};

async function StartFunc({ inFolder, inTableName, inVersion, inPortNumber }) {
    const files = fs.readdirSync(inFolder);

    files.forEach(file => {
        const handler = handlers[file];
        if (handler) {
            handler({
                inFilePath: `${inFolder}/${file}`,
                inTableName, inVersion, inPortNumber
            });
        }
    });
}

module.exports = { StartFunc };
