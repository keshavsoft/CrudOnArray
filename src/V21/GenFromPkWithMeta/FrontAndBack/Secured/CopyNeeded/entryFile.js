const fse = require('fs-extra');
const path = require('path');

const CommonFileName = "GulPHBSFrontEndSec.bat";

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;
    const LocalToFileName = `${LocalToPath}/${CommonFileName}`;

    const LocalIfExists = fse.existsSync(LocalToFileName);

    if (LocalIfExists) {
        return false;
    };

    const LocalFromPath = path.join(__dirname, CommonFileName);

    fse.copyFileSync(LocalFromPath, LocalToFileName);

    return true;
};

module.exports = { StartFunc };