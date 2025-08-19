const { StartFunc: StartFuncFromGenerate } = require("./Generate/entryFile");

const StartFunc = () => {
    StartFuncFromGenerate();
};

module.exports = { StartFunc };