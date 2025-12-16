const { StartFunc: StartFuncFromCreateDataFolder } = require("./createDataFolder");
const { StartFunc: StartFuncFromCreateFoldersInside } = require("./createFoldersInside");

const StartFunc = ({ inRootPath }) => {
    StartFuncFromCreateDataFolder({ inRootPath });
    StartFuncFromCreateFoldersInside({ inRootPath });
};

module.exports = { StartFunc };
