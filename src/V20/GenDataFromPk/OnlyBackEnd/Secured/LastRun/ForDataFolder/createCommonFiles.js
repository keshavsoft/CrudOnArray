const fs = require('fs');
const path = require('path');

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
    LocalFuncForUsersTable({ inRootPath });

    LocalFuncForTasksTable({ inRootPath });
};

const LocalFuncForUsersTable = ({ inRootPath }) => {
    const LocalTableName = `UsersTable.json`;

    const LocalFromTableJson = LocalFuncReadTableSchema({ inRootPath: path.join(inRootPath, "Schemas", LocalTableName) });

    fs.writeFileSync(path.join(inRootPath, "Data", LocalTableName), JSON.stringify(LocalFromTableJson.data), 'utf-8');
};

const LocalFuncForTasksTable = ({ inRootPath }) => {
    const LocalTableName = `TasksTable.json`;

    const LocalFromTableJson = LocalFuncReadTableSchema({ inRootPath: path.join(inRootPath, "Schemas", LocalTableName) });

    fs.writeFileSync(path.join(inRootPath, "Data", LocalTableName), JSON.stringify(LocalFromTableJson.data), 'utf-8');
};

module.exports = { StartFunc };
