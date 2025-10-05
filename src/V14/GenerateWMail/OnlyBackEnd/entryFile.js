// const { StartFunc: StartFuncFromBoth } = require("./Both/entryFile");
const { StartFunc: StartFuncFromNonSecured } = require("./NonSecured/entryFile");

const StartFunc = () => {
    // StartFuncFromBoth();
    StartFuncFromNonSecured();
};

module.exports = { StartFunc };