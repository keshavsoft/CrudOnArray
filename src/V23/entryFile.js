const { StartFunc: StartFuncFromGenerate } = require("./Generate/entryFile");
const { StartFunc: StartFuncFromAsync } = require("./Async/entryFile");
const { StartFunc: StartFuncFromMongoDB } = require("./MongoDB/entryFile");
const { StartFunc: StartFuncFromGenerateWMail } = require("./GenerateWMail/entryFile");
const { StartFunc: StartFuncFromGenWMailAndWs } = require("./GenWMailAndWs/entryFile");
const { StartFunc: StartFuncFromGenDataFromPk } = require("./GenDataFromPk/entryFile");
const { StartFunc: StartFuncFromGenFromPkWithMeta } = require("./GenFromPkWithMeta/entryFile");
const { StartFunc: StartFuncFromInApiNonSec } = require("./InApiNonSec/entryFile");

const StartFunc = () => {
    StartFuncFromGenerate();
    StartFuncFromAsync();
    StartFuncFromMongoDB();
    StartFuncFromGenerateWMail();
    StartFuncFromGenWMailAndWs();
    StartFuncFromGenDataFromPk();
    StartFuncFromGenFromPkWithMeta();
    StartFuncFromInApiNonSec();
};

module.exports = { StartFunc };