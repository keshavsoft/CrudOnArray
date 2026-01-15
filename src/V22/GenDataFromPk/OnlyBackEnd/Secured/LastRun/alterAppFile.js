const fse = require('fs-extra');
const { StartFunc: StartFuncFromWithMiddleware } = require("./withMiddleware");

const StartFunc = ({ filePath, inNewVersionProtected }) => {
    const content = fse.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    StartFuncFromWithMiddleware({ inLines: lines, inNewVersion: inNewVersionProtected });

    fse.writeFileSync(filePath, lines.join('\n'), 'utf-8');
};

module.exports = { StartFunc };
