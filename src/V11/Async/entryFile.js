const { StartFunc: StartFuncFromFrontAndBackWithGulp } = require("./FrontAndBackWithGulp/entryFile");

const StartFunc = () => {
    StartFuncFromFrontAndBackWithGulp();
};

module.exports = { StartFunc };