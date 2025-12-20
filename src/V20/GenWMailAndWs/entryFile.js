const { StartFunc: StartFuncFromOnlyBackEnd } = require("./OnlyBackEnd/entryFile");
const { StartFunc: StartFuncFromFrontAndBack } = require("./FrontAndBack/entryFile");
const { StartFunc: StartFuncFromOnlyFrontEnd } = require("./OnlyFrontEnd/entryFile");

const StartFunc = () => {
    StartFuncFromOnlyBackEnd();
    StartFuncFromFrontAndBack();
    StartFuncFromOnlyFrontEnd();
};

module.exports = { StartFunc };