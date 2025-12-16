const fs = require('fs');
const path = require('path');
const CommonSchemaJsonName = "schema.json";

const LocalFuncReadSchemaJson = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/${CommonSchemaJsonName}`, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
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

const StartFunc = ({ inRootPath }) => {
    const LocalJsonSchema = LocalFuncReadSchemaJson({ inRootPath });
    const LocalTablesArray = LocalJsonSchema.Tables;

    try {
        if (fs.existsSync(path.join(inRootPath, "Data")) === false) {
            fs.mkdirSync(path.join(inRootPath, "Data"));

            for (const tableName of LocalTablesArray) {
                const LocalFromTableJson = LocalFuncReadTableSchema({ inRootPath: path.join(inRootPath, "Schemas", `${tableName}.json`) });

                fs.writeFileSync(path.join(inRootPath, "Data", `${tableName}.json`), JSON.stringify(LocalFromTableJson.data), 'utf-8');

                fs.mkdirSync(path.join(inRootPath, "Data", tableName));
            };
        };
    } catch (err) {
        console.error(`Error creating or writing file: ${err.message}`);
    };
};

module.exports = { StartFunc };
