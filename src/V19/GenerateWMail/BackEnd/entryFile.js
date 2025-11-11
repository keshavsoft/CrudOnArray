const { StartFunc: StartFuncFromOnly } = require("./Only/entryFile");

const StartFunc = () => {
    StartFuncFromOnly();
};

module.exports = { StartFunc };