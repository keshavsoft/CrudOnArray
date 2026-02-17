import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inDataPk, inFromDate, inToDate, inDateField }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inDataPk, inFromDate, inToDate, inDateField });

    return LocalFromLowDb;
};

export {
    GetFunc
};