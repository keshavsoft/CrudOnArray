import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inDataPk, inKey, inValue }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inDataPk, inKey, inValue });

    return LocalFromLowDb;
};

export {
    GetFunc
};