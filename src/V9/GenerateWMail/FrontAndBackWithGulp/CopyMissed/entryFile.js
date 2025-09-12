const { StartFunc: StartFuncFromCopyFolders } = require('./copyFolders');
const { StartFunc: StartFuncFromAlterPackageJson } = require('./alterPackageJson');

const StartFunc = async ({ inToPath }) => {
    await StartFuncFromCopyFolders({ inToPath });
    StartFuncFromAlterPackageJson({ inToPath });
};

module.exports = { StartFunc };