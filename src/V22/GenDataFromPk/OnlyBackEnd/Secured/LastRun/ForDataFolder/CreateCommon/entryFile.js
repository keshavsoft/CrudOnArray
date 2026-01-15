const { StartFunc: StartFuncFromusersTablefile } = require("./usersTablefile");
const { StartFunc: StartFuncFromtokenTablefile } = require("./tokenTablefile");
const { StartFunc: StartFuncFromtokenTableFolder } = require("./tokenTableFolder");
const { StartFunc: StartFuncFromusersTableFolder } = require("./usersTableFolder");

const StartFunc = ({ inRootPath }) => {
    StartFuncFromusersTablefile({ inRootPath });
    StartFuncFromtokenTablefile({ inRootPath });
    StartFuncFromtokenTableFolder({ inRootPath });
    StartFuncFromusersTableFolder({ inRootPath });
};

module.exports = { StartFunc };
