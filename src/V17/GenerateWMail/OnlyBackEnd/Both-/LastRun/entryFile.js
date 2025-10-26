const { StartFunc: StartFuncFromCopyTokenFolder } = require("./copyTokenFolder");
const { StartFunc: StartFuncFromCreateDataFolder } = require("./createDataFolder");
const { StartFunc: StartFuncFromAlterAppFile } = require("./alterAppFile");

const StartFunc = ({ filePath, newVersion, inNewVersionProtected, inToPath }) => {
    StartFuncFromAlterAppFile({ filePath, newVersion, inNewVersionProtected });

    StartFuncFromCopyTokenFolder({ inToPath });

    StartFuncFromCreateDataFolder({ inRootPath: inToPath });
};

module.exports = { StartFunc };
