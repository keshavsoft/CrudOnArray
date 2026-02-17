const { StartFunc: StartFuncFromCreateDataFolder } = require("./createDataFolder");
const { StartFunc: StartFuncFromCreateFoldersInside } = require("./createFoldersInside");
const { StartFunc: StartFuncFromCreateCommon } = require("./CreateCommon/entryFile");

const StartFunc = ({ inRootPath }) => {
    StartFuncFromCreateDataFolder({ inRootPath });
    StartFuncFromCreateCommon({ inRootPath });
    StartFuncFromCreateFoldersInside({ inRootPath });
};

module.exports = { StartFunc };
