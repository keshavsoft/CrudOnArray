const fs = require('fs');
const path = require('path');

// 👉 Configure these
const TARGET_FOLDER_NAME = "Controllers";

const StartFunc = (rootPath, currentPath, inVersion, inPortNumber) => {
    let entries;

    try {
        entries = fs.readdirSync(currentPath, { withFileTypes: true });
    } catch (err) {
        console.error("Cannot read:", currentPath, err.message);
        return;
    };

    const LocalNamesOnly = entries.map(entry => entry.name);

    if (LocalNamesOnly.includes(TARGET_FOLDER_NAME)) {
        LocalFuncToRun(rootPath, currentPath, inVersion, inPortNumber)
    };

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const fullPath = path.join(currentPath, entry.name);

        StartFunc(rootPath, fullPath, inVersion, inPortNumber);
    };
};

const LocalFuncToRun = (rootPath, inPath, inVersion, inPortNumber) => {
    const LocalPathToArray = inPath.split("\\");
    const LocalPathLastRoute = LocalPathToArray[LocalPathToArray.length - 1];

    const fullPath = path.join(inPath, "restNew.http");
    const LocalRoutePath = path.join(inPath, "..", "routes.js");
    const LocalSearchString = `/${LocalPathLastRoute}/`;

    const linesArray = LocalFuncFileAsArray(LocalRoutePath);

    const LocalFindRow = linesArray.find(element => element.includes(LocalSearchString));
    const LocalFindRowArray = LocalFindRow.split("}")[0].split(" as ")[1].replace("routerFrom", "");

    LocalPathToArray[LocalPathToArray.length - 1] = LocalFindRowArray;
    const LocalStringToInsert = LocalPathToArray.join("/").replace(rootPath, "");

    fs.writeFileSync(fullPath, `GET http://localhost:${inPortNumber}${LocalStringToInsert}`, 'utf8');
};

const LocalFuncFileAsArray = (inFileName) => {

    const content = fs.readFileSync(inFileName, 'utf-8');
    const linesArray = content.split(/\r?\n/);

    return linesArray;
};

// StartFunc("V1");
module.exports = { StartFunc };