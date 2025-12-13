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
        const dataPath = path.join(inRootPath, "Data");
        const companyPath = path.join(dataPath, "902");
        if (fs.existsSync(path.join(inRootPath, "Data")) === false) {

            // Ensure base folders exist
            fs.mkdirSync(dataPath, { recursive: true });
            fs.mkdirSync(companyPath, { recursive: true });

            for (const tableName of LocalTablesArray) {
                const LocalFromTableJson = LocalFuncReadTableSchema({
                    inRootPath: path.join(inRootPath, "Schemas", `${tableName}.json`)
                });

                // UsersTable & TokenTable → Data
                if (tableName === "UsersTable" || tableName === "TokenTable") {
                    fs.writeFileSync(
                        path.join(dataPath, `${tableName}.json`),
                        JSON.stringify(LocalFromTableJson.data),
                        "utf-8"
                    );

                    fs.mkdirSync(
                        path.join(dataPath, tableName),
                        { recursive: true }
                    );

                } else {
                    // Other tables → Data/902
                    fs.writeFileSync(
                        path.join(companyPath, `${tableName}.json`),
                        JSON.stringify(LocalFromTableJson.data),
                        "utf-8"
                    );

                    fs.mkdirSync(
                        path.join(companyPath, tableName),
                        { recursive: true }
                    );
                }
            }
        };

    } catch (err) {
        console.error(`Error creating or writing file: ${err.message}`);
    }
};

module.exports = { StartFunc };
