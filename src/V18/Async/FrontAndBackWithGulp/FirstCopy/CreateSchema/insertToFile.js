const fs = require("fs");
const CommonFolderName = "Schemas";
const path = require("path");

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;

    try {
        fs.writeFileSync(
            `${LocalToPath}/schema.json`,
            JSON.stringify({
                Tables: ["TasksTable"]
            })
        );

        fs.mkdirSync(`${LocalToPath}/${CommonFolderName}`);

        fs.copyFileSync(
            path.join(__dirname, "TasksTable.json"),
            `${LocalToPath}/${CommonFolderName}/TasksTable.json`
        );
    } catch (err) {
        console.error('Error creating directory:', err.message);
    };
};

module.exports = { StartFunc };