const fs = require('fs');
const { StartFunc: StartFuncFromAsIs } = require('./AsIs');
const { StartFunc: StartFuncFromRowDataWithPk } = require('./RowDataWithPk');
const { StartFunc: StartFuncFromSelColsAsArray } = require('./SelColsAsArray');
const { StartFunc: StartFuncFromSelColumns } = require('./SelColumns');
const { StartFunc: StartFuncFromSingleColumn } = require('./SingleColumn');
const { StartFunc: StartFuncFromSetSingleColumn } = require('./SetSingleColumn');
const { StartFunc: StartFuncFromKeyCount } = require('./KeyCount');
const { StartFunc: StartFuncFromMaxRow } = require('./MaxRow');

const handlers = {
    "1_AsIs.http": StartFuncFromAsIs,
    "2_RowDataWithPk.http": StartFuncFromRowDataWithPk,
    "3_SelColsAsArray.http": StartFuncFromSelColsAsArray,
    "4_SelColumns.http": StartFuncFromSelColumns,
    "5_SingleColumn.http": StartFuncFromSingleColumn,
    "6_SetSingleColumn.http": StartFuncFromSetSingleColumn,
    "7_KeyCount.http": StartFuncFromKeyCount,
    "8_MaxRow.http": StartFuncFromMaxRow

};

async function StartFunc({ inFolder, inTableName, inVersion, inPortNumber, inColumnsAsArray }) {
    const files = fs.readdirSync(inFolder);
    console.log("📂 Files found:", files);

    for (const file of files) {
        const handler = handlers[file];
        const filePath = `${inFolder}/${file}`;

        if (handler) {
            console.log(`⚙️ Running handler for: ${file}`);
            try {
                await handler({
                    inFilePath: filePath,
                    inTableName,
                    inVersion,
                    inPortNumber,
                    inColumnsAsArray
                });
                console.log(`✅ Completed: ${file}`);
            } catch (error) {
                console.error(`❌ Error in ${file}:`, error.message);
            }
        } else {
            console.warn(`⚠️ No handler found for file: ${file}`);
        }
    }

    console.log("🎉 All handlers executed successfully!");
}

module.exports = { StartFunc };
