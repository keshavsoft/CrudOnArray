const { StartFunc: StartFuncFromNonSecured } = require("./NonSecured/entryFile");
const { StartFunc: StartFuncFromSecured } = require("./Secured/entryFile");

const StartFunc = () => {
    StartFuncFromNonSecured();
    StartFuncFromSecured();
};

module.exports = { StartFunc };