import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inDataPk }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inDataPk });

    return LocalFromLowDb;
};

export {
    GetFunc
};