const { StartFunc: StartFuncFromCopyTokenFolder } = require("./copyTokenFolder");
// const { StartFunc: StartFuncFromCreateDataFolder } = require("./createDataFolder");
const { StartFunc: StartFuncFromAlterAppFile } = require("./alterAppFile");
const { StartFunc: StartFuncFromForDataFolder } = require("./ForDataFolder/entryFile");

const StartFunc = ({ filePath, inNewVersionProtected, inToPath }) => {
    StartFuncFromAlterAppFile({ filePath, inNewVersionProtected });

    StartFuncFromCopyTokenFolder({ inToPath });

    // StartFuncFromCreateDataFolder({ inRootPath: inToPath });

    StartFuncFromForDataFolder({ inRootPath: inToPath });
};

module.exports = { StartFunc };
