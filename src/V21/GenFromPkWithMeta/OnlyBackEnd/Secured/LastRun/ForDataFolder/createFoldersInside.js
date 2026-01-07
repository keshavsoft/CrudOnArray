const fs = require('fs');
const path = require('path');
const CommonJsonName = "UsersTable.json";
const CommonApiFileName = "api.json";

const LocalFuncReadApiJson = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/${CommonApiFileName}`, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

const LocalFunUsersTable = ({ inRootPath }) => {
    try {
        const fileContents = fs.readFileSync(`${inRootPath}/Schemas/${CommonJsonName}`, 'utf-8');

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
    const LocalUsersTableRows = LocalFunUsersTable({ inRootPath });
    const LocalJsonSchema = LocalFuncReadApiJson({ inRootPath });
    const LocalTablesArray = LocalJsonSchema.Tables;

    try {
        if (fs.existsSync(path.join(inRootPath, "Data"))) {
            for (const UsersTableRow of LocalUsersTableRows.data) {
                fs.mkdirSync(path.join(inRootPath, "Data", UsersTableRow.DataPk));

                for (const tableName of LocalTablesArray) {

                    const LocalFromTableJson = LocalFuncReadTableSchema({ inRootPath: path.join(inRootPath, "Schemas", `${tableName}.json`) });

                    fs.writeFileSync(path.join(inRootPath, "Data", UsersTableRow.DataPk, `${tableName}.json`), JSON.stringify(LocalFromTableJson.data), 'utf-8');
                    fs.mkdirSync(path.join(inRootPath, "Data", UsersTableRow.DataPk, tableName));
                };
            };

        };
    } catch (err) {
        console.error(`Error creating or writing file: ${err.message}`);
    };
};

module.exports = { StartFunc };
