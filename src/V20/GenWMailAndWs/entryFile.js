const { StartFunc: StartFuncFromOnlyBackEnd } = require("./OnlyBackEnd/entryFile");
// const { StartFunc: StartFuncFromFrontAndBack } = require("./FrontAndBack/entryFile");

const StartFunc = () => {
    StartFuncFromOnlyBackEnd();
    // StartFuncFromFrontAndBack();
};

module.exports = { StartFunc };