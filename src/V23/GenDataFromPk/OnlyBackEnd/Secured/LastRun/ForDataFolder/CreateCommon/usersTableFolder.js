const fs = require('fs');
const path = require('path');

const StartFunc = ({ inRootPath }) => {
    const LocalTableName = `UsersTable`;
    fs.mkdirSync(path.join(inRootPath, "Data", LocalTableName));
};

module.exports = { StartFunc };
