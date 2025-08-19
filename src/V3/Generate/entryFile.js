const { StartFunc: StartFuncFromWithSubTable } = require("./WithSubTable/entryFile");
const { StartFunc: StartFuncFromOnlyBackEnd } = require("./OnlyBackEnd/entryFile");
const { StartFunc: StartFuncFromFrontAndBack } = require("./FrontAndBack/entryFile");
const { StartFunc: StartFuncFromFrontAndBackWithGulp } = require("./FrontAndBackWithGulp/entryFile");
const { StartFunc: StartFuncFromOnlyFrontEnd } = require("./OnlyFrontEnd/entryFile");

const StartFunc = () => {
    StartFuncFromWithSubTable();
    StartFuncFromOnlyBackEnd();
    StartFuncFromFrontAndBack();
    StartFuncFromFrontAndBackWithGulp();
    StartFuncFromOnlyFrontEnd();
};

module.exports = { StartFunc };