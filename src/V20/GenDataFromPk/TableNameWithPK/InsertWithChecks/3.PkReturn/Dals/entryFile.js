import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inDataPk, inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inDataPk, inRequestBody });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};