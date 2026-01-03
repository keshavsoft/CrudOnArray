const { StartFunc: StartFuncFromCopyTokenFolder } = require("./copyTokenFolder");
const { StartFunc: StartFuncFromCreateDataFolder } = require("./createDataFolder");
const { StartFunc: StartFuncFromAlterAppFile } = require("./alterAppFile");

const StartFunc = ({ filePath, inNewVersionProtected, inToPath }) => {
    StartFuncFromAlterAppFile({ filePath, inNewVersionProtected });

    StartFuncFromCopyTokenFolder({ inToPath });

    StartFuncFromCreateDataFolder({ inRootPath: inToPath });
};

module.exports = { StartFunc };
