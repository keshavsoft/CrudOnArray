const path = require('path');
const fs = require("fs");

function LocalFuncReadTableSchema({ inRootPath }) {
    try {
        const fileContents = fs.readFileSync(inRootPath, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;
    const LoopInsideTablePath = path.join(LocalToPath, "Schemas", "UsersTable.json");

    const LocalDataFromJson = LocalFuncReadTableSchema({ inRootPath: LoopInsideTablePath });

    if (LocalDataFromJson === null) {
        return;
    };

    const LocalDataOfUsers = LocalDataFromJson?.data;

    const LocalFindDataPk = LocalDataOfUsers.filter(element => {
        return "DataPk" in element === false;
    });

    if (LocalFindDataPk.length > 0) {
        return false;
    };

    return true;
};

module.exports = { StartFunc };
