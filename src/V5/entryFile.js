const { StartFunc: StartFuncFromGenerate } = require("./Generate/entryFile");
const { StartFunc: StartFuncFromAsync } = require("./Async/entryFile");

const StartFunc = () => {
    StartFuncFromGenerate();
    StartFuncFromAsync();
};

module.exports = { StartFunc };