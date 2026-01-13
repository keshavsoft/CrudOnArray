const fs = require('fs');
const path = require('path');

const StartFunc = ({ inRootPath }) => {
    const LocalTableName = `TokenTable`;
    fs.mkdirSync(path.join(inRootPath, "Data", LocalTableName));
};

module.exports = { StartFunc };
