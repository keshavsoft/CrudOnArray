import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inDataPk, inBody, inPk }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inDataPk, inBody, inPk });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};