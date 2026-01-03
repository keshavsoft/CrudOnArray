const vscode = require('vscode');
const path = require('path');
const fs = require("fs");

const { StartFunc: StartFuncFromTableCreates } = require('./TableCreate');
const { StartFunc: StartFuncFromCommonFuncs } = require('../../CommonFuncs/entryFile');

const LocalFuncReadSchemaJson = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/schema.json`, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

const StartFunc = async ({ inDataPath, inPortNumber, inToPath, inVersion }) => {
    const localVersion = inVersion;
    const LocalToPath = inToPath;

    const LocalJsonSchema = LocalFuncReadSchemaJson({ inRootPath: LocalToPath });
    const LocalTablesArray = LocalJsonSchema.Tables;

    for (const tableName of LocalTablesArray) {
        const fromTablePath = path.join(__dirname, '..', tableName);
        const toTablePath = path.join(LocalToPath, localVersion, tableName);
        const LoopInsideTablePath = path.join(LocalToPath, "Schemas", `${tableName}.json`);

        const LocalFromTableJson = LocalFuncReadTableSchema({ inRootPath: LoopInsideTablePath });

        const LocalColumnsAsArray = LocalFromTableJson.columns.map(el => el.field);
        const LocalData = LocalFromTableJson.Data ? LocalFromTableJson.Data : [];
        const LocalColumnsWithSchema = LocalFromTableJson.columns;

        const LocalFromCheckSchema = StartFuncFromCommonFuncs({
            inColumnsAsArray: LocalColumnsWithSchema,
            inTableName: tableName
        });

        if (LocalFromCheckSchema === false) {
            // vscode.window.showInformationMessage(`field contains invalid char : ${tableName}`);
            continue;
        };

        if ("SubRoutes" in LocalFromTableJson === false) {
            vscode.window.showInformationMessage(`SubRoutes not found in Json Schema : ${tableName}`);
            continue;
        };

        const LocalSubRoutes = LocalFromTableJson.SubRoutes ? LocalFromTableJson.SubRoutes : [];

        await StartFuncFromTableCreates({
            inFromTablePath: fromTablePath, inToTablePath: toTablePath,
            inTableName: tableName,
            inColumnsAsArray: LocalColumnsAsArray,
            inDataPath,
            inPortNumber, inToPath: LocalToPath,
            inColumnsWithSchema: LocalColumnsWithSchema,
            inData: LocalData, inVersion: localVersion,
            inSubRoutes: LocalSubRoutes,
            inPortNumber
        });
    };
};

function LocalFuncReadTableSchema({ inRootPath }) {
    try {
        const fileContents = fs.readFileSync(inRootPath, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

module.exports = { StartFunc };
