const fs = require('fs');

function StartFunc({ inRootPath }) {
    const filePath = "Mail";
    const LocalIfExists = fs.existsSync(`${inRootPath}/${filePath}`);

    return LocalIfExists;
};

module.exports = { StartFunc };
