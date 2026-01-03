const fs = require('fs');
const path = require('path');

function getJsonFiles({ inToPath }) {
    const files = fs.readdirSync(inToPath);
    const jsonFiles = [];

    files.forEach(file => {
        const filePath = path.join(inToPath, file);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isFile() && path.extname(file) === '.json' && file !== "schema.json") {
            jsonFiles.push(file);
        };
    });

    return jsonFiles;
}

module.exports = { getJsonFiles };