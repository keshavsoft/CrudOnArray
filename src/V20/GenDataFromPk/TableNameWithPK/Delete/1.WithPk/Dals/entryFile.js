import { StartFunc as StartFuncFromDeleteFromFile } from '../KFs/deleteFromFile.js';

let postDefaultFunc = ({ inDataPk, inKey }) => {
    let LocalFromLowDb = StartFuncFromDeleteFromFile({ inDataPk, inKey });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};