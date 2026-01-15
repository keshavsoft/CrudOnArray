const { StartFunc: StartFuncFromOnlyBackEnd } = require("./OnlyBackEnd/entryFile");

// const { StartFunc: StartFuncFromWithSubTable } = require("./WithSubTable/entryFile");
// const { StartFunc: StartFuncFromFrontAndBackWithGulp } = require("./FrontAndBackWithGulp/entryFile");
// const { StartFunc: StartFuncFromOnlyFrontEnd } = require("./OnlyFrontEnd/entryFile");
// const { StartFunc: StartFuncFromFrontAndBackWGulpNonSec } = require("./FrontAndBackWGulpNonSec/entryFile");
// const { StartFunc: StartFuncFromBackEnd } = require("./BackEnd/entryFile");
const { StartFunc: StartFuncFromFrontAndBack } = require("./FrontAndBack/entryFile");

const StartFunc = () => {
    StartFuncFromOnlyBackEnd();

    // StartFuncFromWithSubTable();
    // StartFuncFromFrontAndBackWithGulp();
    // StartFuncFromOnlyFrontEnd();
    // StartFuncFromFrontAndBackWGulpNonSec();
    // StartFuncFromBackEnd();
    StartFuncFromFrontAndBack();
};

module.exports = { StartFunc };