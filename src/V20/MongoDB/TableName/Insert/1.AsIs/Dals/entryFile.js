import { StartFunc as StartFuncFromInsertToFile } from '../FromMongoDB/insertToFile.js';

let postDefaultFunc = async ({ inRequestBody }) => {
    let LocalFromLowDb = await StartFuncFromInsertToFile({ inRequestBody });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};