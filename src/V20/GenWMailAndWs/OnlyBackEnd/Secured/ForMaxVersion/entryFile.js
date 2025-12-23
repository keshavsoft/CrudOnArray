const vscode = require('vscode');
const path = require('path');
const fs = require("fs");

const { StartFunc: StartFuncFromTableCreates } = require('./TableCreate');
const { StartFunc: StartFuncFromCheckSchema } = require('../../CommonFuncs/checkSchema');
const CommonApiJsonName = "api.json";

const LocalFuncReadSchemaJson = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/${CommonApiJsonName}`, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

const LocalFuncCheckSchema = ({ inColumnsAsArray, inTableName, inTableJson }) => {
    const LocalFromTableJson = inTableJson;
    const LocalTableName = inTableName;

    const LocalFromCheckSchema = StartFuncFromCheckSchema({ inColumnsAsArray });

    if (LocalFromCheckSchema === false) {
        vscode.window.showInformationMessage(`field contains invalid char : ${LocalTableName}`);
        return false;
    };

    if ("NonSecured" in LocalFromTableJson === false) {
        vscode.window.showInformationMessage(`NonSecured not found in Json Schema : ${LocalTableName}`);
        return false;
    };

    if ("SubRoutes" in LocalFromTableJson.NonSecured === false) {
        vscode.window.showInformationMessage(`SubRoutes not found in Json Schema : ${LocalTableName}`);
        return false;
    };

    return true;
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

        const LocalFromCheck = LocalFuncCheckSchema({
            inColumnsAsArray: LocalColumnsWithSchema,
            inTableName: tableName,
            inTableJson: LocalFromTableJson
        });

        if (LocalFromCheck === false) {
            continue;
        };

        const LocalSubRoutes = LocalFromTableJson.NonSecured.SubRoutes ? LocalFromTableJson.NonSecured.SubRoutes : [];

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
