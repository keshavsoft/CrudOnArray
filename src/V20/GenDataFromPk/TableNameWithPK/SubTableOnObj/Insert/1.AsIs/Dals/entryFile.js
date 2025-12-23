import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inDataPk, inRowIndex, inKeyName, inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inDataPk, inRowIndex, inKeyName, inRequestBody });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};