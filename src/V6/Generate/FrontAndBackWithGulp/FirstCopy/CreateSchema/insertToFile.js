const fs = require("fs");
const CommonFolderName = "Schemas";
const path = require("path");

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;

    try {
        fs.writeFileSync(
            `${LocalToPath}/schema.json`,
            JSON.stringify({
                Tables: ["TasksTable", "TokenTable", "UsersTable"]
            })
        );

        fs.mkdirSync(`${LocalToPath}/${CommonFolderName}`);

        // fs.copyFileSync(
        //     path.join(__dirname, "TasksTable.json"),
        //     `${LocalToPath}/${CommonFolderName}/TasksTable.json`
        // );

        // fs.copyFileSync(
        //     path.join(__dirname, "TokenTable.json"),
        //     `${LocalToPath}/${CommonFolderName}/TokenTable.json`
        // );

        LocalFuncForTables({ inToPath: LocalToPath });

        fs.copyFileSync(
            path.join(__dirname, ".env"),
            `${LocalToPath}/.env`
        );
    } catch (err) {
        console.error('Error creating directory:', err.message);
    };
};

const LocalFuncForTables = ({ inToPath }) => {
    const LocalToPath = inToPath;

    fs.copyFileSync(
        path.join(__dirname, "TasksTable.json"),
        `${LocalToPath}/${CommonFolderName}/TasksTable.json`
    );

    fs.copyFileSync(
        path.join(__dirname, "TokenTable.json"),
        `${LocalToPath}/${CommonFolderName}/TokenTable.json`
    );

    fs.copyFileSync(
        path.join(__dirname, "UsersTable.json"),
        `${LocalToPath}/${CommonFolderName}/UsersTable.json`
    );
};

module.exports = { StartFunc };