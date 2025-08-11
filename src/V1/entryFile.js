const { StartFunc: StartFuncFromKS } = require("./KS/entryFile");

const StartFunc = () => {
    StartFuncFromKS();
};

module.exports = { StartFunc };