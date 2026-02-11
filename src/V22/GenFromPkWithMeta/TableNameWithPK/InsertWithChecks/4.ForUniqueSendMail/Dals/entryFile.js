import { StartFunc as StartFuncFromInsertToFile } from '../KFs/entryFile.js';

let postDefaultFunc = ({ inRequestBody, inDomainName }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inRequestBody, inDomainName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};