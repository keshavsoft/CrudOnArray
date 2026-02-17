const path = require('path');
const fs = require("fs");
const CommonApiJsonName = "api.json";
const { StartFunc: StartFuncFromForCheck } = require('./forCheck');

function LocalFuncReadTableSchema({ inRootPath }) {
    try {
        const fileContents = fs.readFileSync(inRootPath, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

const LocalFuncReadSchemaJson = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/${CommonApiJsonName}`, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;

    const LocalJsonSchema = LocalFuncReadSchemaJson({ inRootPath: LocalToPath });
    const LocalTablesArray = LocalJsonSchema.Tables;
    let LocalSuccess = false;

    for (const tableName of LocalTablesArray) {
        const LoopInsideTablePath = path.join(LocalToPath, "Schemas", `${tableName}.json`);

        const LocalFromTableJson = LocalFuncReadTableSchema({ inRootPath: LoopInsideTablePath });

        if (LocalFromTableJson === null) {
            continue;
        };

        const LocalColumnsWithSchema = LocalFromTableJson.columns;

        const LocalFromCheck = StartFuncFromForCheck({
            inColumnsWithSchema: LocalColumnsWithSchema,
            inTableName: tableName,
            inFromTableJson: LocalFromTableJson
        });

        if (LocalFromCheck === false) {
            continue;
        };

        LocalSuccess = true;
    };

    if (LocalSuccess === false) {
        return false;
    };
};

module.exports = { StartFunc };
