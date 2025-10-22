// const { StartFunc: StartFuncFromBoth } = require("./Both/entryFile");
const { StartFunc: StartFuncFromNonSecured } = require("./NonSecured/entryFile");
// const { StartFunc: StartFuncFromSecured } = require("./Secured/entryFile");

const StartFunc = () => {
    // StartFuncFromBoth();
    StartFuncFromNonSecured();
    // StartFuncFromSecured();
};

module.exports = { StartFunc };