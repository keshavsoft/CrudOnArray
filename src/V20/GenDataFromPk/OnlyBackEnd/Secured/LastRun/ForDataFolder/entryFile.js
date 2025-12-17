const { StartFunc: StartFuncFromCreateDataFolder } = require("./createDataFolder");
const { StartFunc: StartFuncFromCreateFoldersInside } = require("./createFoldersInside");
const { StartFunc: StartFuncFromCreateCommonFiles } = require("./createCommonFiles");

const StartFunc = ({ inRootPath }) => {
    StartFuncFromCreateDataFolder({ inRootPath });
    StartFuncFromCreateCommonFiles({ inRootPath });
    StartFuncFromCreateFoldersInside({ inRootPath });
};

module.exports = { StartFunc };
