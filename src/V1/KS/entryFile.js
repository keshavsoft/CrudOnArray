const { StartFunc: StartFuncFromAppend } = require("./Append/entryFile");

const StartFunc = () => {
    StartFuncFromAppend();
};

module.exports = { StartFunc };