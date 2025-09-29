const { StartFunc: StartFuncFromWithSubTable } = require("./WithSubTable/entryFile");
const { StartFunc: StartFuncFromOnlyBackEnd } = require("./OnlyBackEnd/entryFile");
const { StartFunc: StartFuncFromFrontAndBackWithGulp } = require("./FrontAndBackWithGulp/entryFile");
const { StartFunc: StartFuncFromOnlyFrontEnd } = require("./OnlyFrontEnd/entryFile");
const { StartFunc: StartFuncFromFrontAndBackWGulpNonSec } = require("./FrontAndBackWGulpNonSec/entryFile");
const { StartFunc: StartFuncFromOnlyFrontEndNonSec } = require("./OnlyFrontEndNonSec/entryFile");

const StartFunc = () => {
    StartFuncFromWithSubTable();
    StartFuncFromOnlyBackEnd();
    StartFuncFromFrontAndBackWithGulp();
    StartFuncFromOnlyFrontEnd();
    StartFuncFromFrontAndBackWGulpNonSec();
    StartFuncFromOnlyFrontEndNonSec();
};

module.exports = { StartFunc };