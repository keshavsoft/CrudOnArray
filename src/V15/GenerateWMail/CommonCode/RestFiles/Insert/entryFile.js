const fs = require('fs');

// Import all handlers
const { StartFunc: AsIs } = require('./AsIs');
const { StartFunc: AsIsNoPk } = require('./AsIsNoPk');
const { StartFunc: AsIsAndTS } = require('./AsIsAndTS');
const { StartFunc: ColumnExist } = require('./ColumnExist');
const { StartFunc: SchemaColumnsOnly } = require('./SchemaColumnsOnly');
const { StartFunc: BulkAsIs } = require('./BulkAsIs');
const { StartFunc: Default } = require('./Default');
// const { StartFunc: OnlyDefault } = require('./OnlyDefault');

// Map file names to handler functions
const handlers = {
    "1_AsIs.http": AsIs,
    "2_AsIsNoPk.http": AsIsNoPk,
    "3_AsIsAndTS.http": AsIsAndTS,
    "4_ColumnExist.http": ColumnExist,
    "5_SchemaColumnsOnly.http": SchemaColumnsOnly,
    "6_BulkAsIs.http": BulkAsIs,
    "7_Default.http": Default
    // "8_OnlyDefault.http": OnlyDefault
};

async function StartFunc({ inFolder, inTableName, inVersion, inPortNumber, inColumnsAsArray }) {
    console.log("🔍 Starting process...",inColumnsAsArray);
    // console.log({ inFolder, inTableName, inVersion, inPortNumber, inColumnsAsArray });

    // Read all files from folder
    const files = fs.readdirSync(inFolder);
    console.log("📂 Files found:", files);

    // Loop through each file
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
