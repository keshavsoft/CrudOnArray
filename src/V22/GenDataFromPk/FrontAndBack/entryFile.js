const { StartFunc: StartFuncFromSecured } = require("./Secured/entryFile");

const StartFunc = () => {
    StartFuncFromSecured();
};

module.exports = { StartFunc };