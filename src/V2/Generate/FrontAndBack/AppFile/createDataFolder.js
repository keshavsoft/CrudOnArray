const fs = require('fs');
const path = require('path');

const LocalFuncReadSchemaJson = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/schema.json`, 'utf-8');

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
        if (fs.existsSync(path.join(inRootPath, "Data"))) {
            console.log(`The folder at  exists.`);
        } else {
            fs.mkdirSync(path.join(inRootPath, "Data"));

            for (const tableName of LocalTablesArray) {
                fs.writeFileSync(path.join(inRootPath, "Data", `${tableName}.json`), JSON.stringify([]), 'utf-8');
            };
        };
    } catch (err) {
        console.error(`Error creating or writing file: ${err.message}`);
    }
};

module.exports = { StartFunc };
