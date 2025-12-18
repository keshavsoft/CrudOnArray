import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inId, inDataPk }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inId, inDataPk });

    return LocalFromLowDb;
};

export {
    GetFunc
};