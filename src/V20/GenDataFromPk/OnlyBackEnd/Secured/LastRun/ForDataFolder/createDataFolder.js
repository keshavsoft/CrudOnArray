const fs = require('fs');
const path = require('path');

const StartFunc = ({ inRootPath }) => {
    try {
        if (fs.existsSync(path.join(inRootPath, "Data")) === false) {
            fs.mkdirSync(path.join(inRootPath, "Data"));
        };
    } catch (err) {
        console.error(`Error creating or writing file: ${err.message}`);
    };
};

module.exports = { StartFunc };
