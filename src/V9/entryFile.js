const { StartFunc: StartFuncFromGenerate } = require("./Generate/entryFile");
const { StartFunc: StartFuncFromAsync } = require("./Async/entryFile");
const { StartFunc: StartFuncFromMongoDB } = require("./MongoDB/entryFile");
const { StartFunc: StartFuncFromGenerateWMail } = require("./GenerateWMail/entryFile");

const StartFunc = () => {
    StartFuncFromGenerate();
    StartFuncFromAsync();
    StartFuncFromMongoDB();
    StartFuncFromGenerateWMail();
};

module.exports = { StartFunc };