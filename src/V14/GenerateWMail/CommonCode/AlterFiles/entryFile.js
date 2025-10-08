const { StartFunc: StartFuncFromReadParams } = require("./readParams");
const { StartFunc: StartFuncFromAlterRestFiles } = require("./AlterRestFiles/entryFile");
const { StartFunc: StartFuncFromForGetColumnsAsArray } = require("./ForGetColumnsAsArray/entryFile");
const { StartFunc: StartFuncFromForAlterWithColumns } = require("./ForAlterWithColumns/entryFile");
const { StartFunc: StartFuncFromForInsert } = require("./ForInsert/entryFile");

const StartFunc = async ({ inEditorPath, inTableName, inDataPath, inPortNumber, inColumnsAsArray, inVersion, inColumnsWithSchema, inData, inDefaultObjectToInsert }) => {
    const LocalVersion = inVersion;

    StartFuncFromReadParams({
        inEditorPath, inTableName, inDataPath,
        inVersion: LocalVersion,
        inColumnsAsArray, inColumnsWithSchema,
        inDefaultObjectToInsert
    });

    // await StartFuncFromAlterRestFiles({
    //     inEditorPath, inTableName, inPortNumber, inVersion,
    //     inColumnsAsArray
    // });
    // LocalFuncToReplace({
    //     inFilePath: `${inEditorPath}/RestClients/1_AsIs.http`,
    //     inTableName, inVersion, inPortNumber
    // });

    await StartFuncFromForGetColumnsAsArray({ inEditorPath, inTableName, inPortNumber, inVersion });

    await StartFuncFromForInsert({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });

    await StartFuncFromForAlterWithColumns({ inEditorPath, inTableName, inColumnsAsArray, inPortNumber, inVersion });
};

// GET http://localhost:{PortNumber}/{Version}/{TableName}/Read/AsIs

const LocalFuncToReplace = ({ inFileName, inTableName, inVersion, inPortNumber }) => {
    const fs = require('fs');

    const filePath = inFileName; // Replace with your file path

    fs.readFile(`${filePath}/${inVersion}/${inTableName}/`, 'utf-8', (err, contents) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        let updatedContents = contents.replace(new RegExp("{PortNumber}", 'g'), inPortNumber);
        let updatedContents1 = updatedContents.replace(new RegExp("{Version}", 'g'), inVersion);
        let updatedContents2 = updatedContents1.replace(new RegExp("{TableName}", 'g'), inTableName);

        fs.writeFile(filePath, updatedContents2, 'utf-8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('String replaced successfully in', filePath);
        });
    });
};

module.exports = { StartFunc };
