const fs = require("fs");
const path = require("path");

// 👉 Configure these
const TARGET_FOLDER_NAME = "RestClients";

const StartFunc = (currentPath, inVersion) => {
    let entries;

    try {
        entries = fs.readdirSync(currentPath, { withFileTypes: true });
    } catch (err) {
        console.error("Cannot read:", currentPath, err.message);
        return;
    }

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const fullPath = path.join(currentPath, entry.name);

        // ✅ Match folder name
        if (entry.name === TARGET_FOLDER_NAME) {
            console.log("🎯 Match found:", fullPath);

            // 👉 Do your logic ONLY here
            doSomethingWithMatchedFolder(fullPath, inVersion);
        }

        // 🔁 Recurse into subfolder
        StartFunc(fullPath, inVersion);
    };
}

const doSomethingWithMatchedFolder = (folderPath, inVersion) => {
    console.log("Running logic inside:", folderPath);

    // Example: list files inside the matched folder
    const files = fs.readdirSync(folderPath);
    // console.log("Files:", files);

    for (const entry of files) {
        const fullPath = path.join(folderPath, entry);
        // let LocalFileData = fs.readFileSync(fullPath, 'utf8');

        // console.log("LocalFileData : ", LocalFileData);
        // // const LocalAlteredFileData = LocalFileData.replace("{PortNumber}", "9328");
        // const LocalAlteredFileData = LocalFileData.replace(new RegExp(placeholder, 'g'), "9328");


        // console.log("111111 : ", LocalAlteredFileData);
        // fs.writeFileSync(fullPath, LocalAlteredFileData, 'utf8');

        replacePortInFile(fullPath, 9328, inVersion);
    };
}

const replacePortInFile = (filePath, newPort, inVersion) => {
    const placeholder = '{PortNumber}';

    try {
        // 1. Read the file content
        // Specify 'utf-8' encoding to get a string, not a Buffer.
        const contents = fs.readFileSync(filePath, 'utf-8');
        // console.log(contents.includes('{PortNumber}'));
        const LocalPathAsArray = filePath.split("\\");

        // 2. Replace all occurrences of the placeholder
        // Use a global regex (/{Port Number}/g) to replace all instances.
        // const updatedContents = contents.replace(new RegExp(placeholder, 'g'), newPort);
        let updatedContents = contents.split('{PortNumber}').join(newPort);
        console.log("aaaaa ", LocalPathAsArray[1]);

        updatedContents = updatedContents.split('{Version}').join(inVersion);
        updatedContents = updatedContents.split('{TableName}').join(LocalPathAsArray[1]);

        // 3. Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContents, 'utf-8');

        console.log(`Successfully updated ${placeholder} to ${newPort} in ${filePath}`);

    } catch (err) {
        console.error(`Error processing file: ${err.message}`);
    }
};

module.exports = { StartFunc };
