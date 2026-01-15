import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inDataPk, inRowIndex, inKeyName }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inDataPk, inRowIndex, inKeyName });

    return LocalFromLowDb;
};

export {
    GetFunc
};